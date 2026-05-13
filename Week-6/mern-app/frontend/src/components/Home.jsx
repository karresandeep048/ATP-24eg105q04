import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Employees", value: "—", icon: "👥" },
    { label: "Departments", value: "—", icon: "🏢" },
    { label: "Active Today", value: "—", icon: "✅" },
  ];

}

export default Home;
