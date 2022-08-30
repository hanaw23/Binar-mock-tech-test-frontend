import PageHeader from "../../components/headers/PageHeader";

export default function index() {
  return (
    <div>
      <div className="border border-b-gray-800 py-8">
        <PageHeader title="Product List" titleButton="Create New" />
      </div>
    </div>
  );
}
