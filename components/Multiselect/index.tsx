import { SetStateAction, useState } from "react";
import Select from "react-tailwindcss-select";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";

const options = [
  { value: "16", label: "🐝 Honeybee" },
  { value: "15", label: "🦊 Fox" },
  { value: "14", label: "🦋 Butterfly" },
  { value: "13", label: "🐝 Honeybee" },
  { value: "12", label: "🦊 Fox" },
  { value: "11", label: "🦋 Butterfly" },
  { value: "10", label: "🐝 Honeybee" },
  { value: "9", label: "🦊 Fox" },
  { value: "8", label: "🦋 Butterfly" },
  { value: "7", label: "🐝 Honeybee" },
  { value: "6", label: "🦊 Fox" },
  { value: "5", label: "🦋 Butterfly" },
  { value: "4", label: "🐝 Honeybee" },
  { value: "3", label: "🦊 Fox" },
  { value: "2", label: "🦋 Butterfly" },
  { value: "1", label: "🐝 Honeybee" },
];

const App = () => {
  const [animal, setAnimal] = useState<SelectValue>(null);

  const handleChange = (value: SelectValue) => {
    setAnimal(value);
    if (Array.isArray(value)) {
      console.log(value.map((a) => a.value));
    }
  };

  return (
      <Select
        classNames={{
          menuButton: () =>
            `flex flex-wrap w-full text-sm text-foreground border border-border rounded shadow-sm transition-all duration-300 focus:outline-none pl-3`,
          menu: "bg-background z-10 w-full border rounded mt-1.5 text-sm text-foreground p-1  ",
          tagItem: () => "bg-background flex border-r m-0.5",
          listItem: (value?: { isSelected?: boolean }) =>
            ` relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-12 ${
              value?.isSelected
                ? `py-1.5 pl-8 pr-2 text-sm font-semibold`
                : `text-gray-500 hover:bg-accent hover:text-foreground `
            }`,
          searchContainer: "flex flex-row",
          searchBox: "bg-background w-full pl-1",
          searchIcon: "w-8 h-8 pr-2",
        }}
        searchInputPlaceholder="Pesquisar"
        isSearchable
        isMultiple
        value={animal}
        onChange={handleChange}
        options={options}
        primaryColor={"blue"}
      />
  );
};

export default App;
