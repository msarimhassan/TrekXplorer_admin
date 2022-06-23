import NavRoutes from "./NavRoutes"
import { DashboardOutlined,ShopOutlined,UserOutlined } from '@ant-design/icons';


const NavData = [
    {
        title: 'Dashboard',
        icon: <DashboardOutlined style={{ fontSize: 18 }} />,
        link: NavRoutes.dashboard
    },
    {
        title: 'Companies',
        icon: <ShopOutlined style={{ fontSize: 18 }} />,
        link: NavRoutes.companies,
    },
    {
        title: 'Users',
        icon: <UserOutlined style={{fontSize:18}}/>,
        link:NavRoutes.users,
    },
];

export default NavData;