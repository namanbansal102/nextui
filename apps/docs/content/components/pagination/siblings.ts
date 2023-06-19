const App = `import {Pagination, Button} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex flex-col gap-5">
      <p>1 Sibling (default)</p>
      <Pagination
        total={10}
        color="danger"
      />
      <p>2 Siblings</p>
      <Pagination
        total={10}
        siblings={2}
        color="danger"
      />
      <p>3 Siblings</p>
      <Pagination
        total={10}
        siblings={3}
        color="danger"
      />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
