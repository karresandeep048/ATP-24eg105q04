import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Employees", value: "—"},
    { label: "Departments", value: "—" },
    { label: "Active Today", value: "—"},
  ];

}

export default Home;
