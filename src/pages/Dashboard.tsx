import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/images/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BiMaleFemale } from "react-icons/bi";
import { BarChart, DoughnutChart } from "../components/Chart";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">

        <div className="bar">
          
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg}  alt="User" />
        </div>

        <section className="widgetContainer">
          <WidgetItem
          percent={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0, 155, 255)"
          />

          <WidgetItem
          percent={-14}
          amount={false}
          value={400}
          heading="Users"
          color="rgb(0, 198, 202)"
          />


          <WidgetItem
          percent={80}
          amount={true}
          value={23000}
          heading="Transactions"
          color="rgb(255, 196, 0)"
          />

          <WidgetItem
          percent={30}
          amount={true}
          value={1000}
          heading="Products"
          color="rgb(76, 0, 255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>

            <BarChart
            data_2 = {[300, 144, 433, 655, 237, 755, 190]}
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0, 115, 255)"
            bgColor_2="rgba(53, 162, 235, 0.8)"
            />

          </div>

          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>

              {
                data.categories.map((ele) => (
                  <CategoryItem key={ele.heading} 
                  heading={ele.heading} 
                  value={ele.value} 
                  color={`hsl(${ele.value * 4}, ${ele.value}%, 50%)`} />
                ))
              }
              
            </div>
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>

            <DoughnutChart labels={["Female", "Male"]} data={[12, 19]} 
            backgroundColor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8"]}
            cutout={90}
            />

            <p><BiMaleFemale /></p>
            
          </div>

          <DashboardTable data={data.transaction} />
        </section>

      </main>
    </div>
  )
};

interface widgetItemProps{
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({heading, value, percent, color, amount} : widgetItemProps) => (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4> {amount ? `$${value}` : value} </h4>
        {
          percent > 0 ? (
            <span className="green">
              <HiTrendingUp /> +{percent}%{" "}
            </span>
          ) : (
            <span className="red">
              <HiTrendingDown /> {percent}%{" "}
            </span>
          )
        }
      </div>

      <div className="widgetCircle" style={{
        // color gradient is used to make the circle only of the given percent ( MDN )
        background: `conic-gradient(
          ${color} ${(Math.abs(percent)/100)*360}deg,
          rgb(255, 255, 255) 0 
        )`
      }}>
        <span style={{color}}>{percent}%</span>
      </div>

    </article>
);


interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({color, value, heading} : CategoryItemProps) => (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div style={{
          backgroundColor: color,
          width: `${value}%`,
        }}>
        </div>
      </div>
      <span>{value}%</span>
    </div>
)



export default Dashboard;
