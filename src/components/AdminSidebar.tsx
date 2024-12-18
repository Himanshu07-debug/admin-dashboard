import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation, Location } from "react-router-dom";

const AdminSidebar = () => {

    const location = useLocation();

    return (
        <aside>
            <h2>Logo.</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>

                    <Li url="/admin/dashboard" text="DashBoard" Icon={RiDashboardFill} location={location} />

                    <Li url="/admin/product" text="Product" Icon={RiShoppingBag3Fill} location={location} />

                    <Li url="/admin/customer" text="Customer" Icon={IoIosPeople} location={location} />

                    <Li url="/admin/transaction" text="Transactions" Icon={AiFillFileText} location={location} />

                </ul>
            </div>

            <div>
                <h5>Charts</h5>
                <ul>

                    <Li url="/admin/chart/bar" text="Bar" Icon={FaChartBar} location={location} />

                    <Li url="/admin/chart/pie" text="Pie" Icon={FaChartPie} location={location} />

                    <Li url="/admin/chart/line" text="Line" Icon={FaChartLine} location={location} />

                </ul>
            </div>

            <div>
                <h5>Apps</h5>
                <ul>

                    <Li url="/admin/app/stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location} />

                    <Li url="/admin/app/coupon" text="Coupon" Icon={RiCoupon3Fill} location={location} />

                    <Li url="/admin/app/toss" text="Toss" Icon={FaGamepad} location={location} />

                </ul>
            </div>
        </aside>
    )
}


interface LiProps {
    url : string;
    text: string;
    location : Location;
    Icon : IconType;
}

const Li = ({url, text, location, Icon} : LiProps) => {

    return (
        <li
        style={{
            backgroundColor : location.pathname.includes(url) ?
            "rgba(0, 115, 255, 0.1)" : "white"
        }}
        >
            <Link to={url}
            style={{
                color: location.pathname.includes(url) ?
                "rgb(0, 115, 255)" : "black"
            }}
            >
                <Icon />
                {text}
            </Link>
        </li>
    )

}


export default AdminSidebar