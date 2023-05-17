import { MyButton, MyLabel, MyInput, MySheet } from "../ui";
import { ArrowDownUp, Menu, Users } from "lucide-react";

const SidebarComponent = () => {
  return (
    <div className="flex flex-col space-y-8">
      <MySheet.Sheet>
        <MySheet.SheetTrigger asChild>
          <MyButton.Button variant={"link"} className="h-12 w-12">
            <Menu size={50}></Menu>
          </MyButton.Button>
        </MySheet.SheetTrigger>

        <MySheet.SheetContent
          className="pt-0 px-0"
          position={"left"}
          size="lg"
        >
          <MySheet.SheetHeader className=" p-3">
            <MySheet.SheetTitle>MENU</MySheet.SheetTitle>
          </MySheet.SheetHeader>

          <MySheet.SheetDescription>
            <MyButton.Button
              className="rounded-none align-middle w-full justify-start"
              variant={"ghost"}
            >
              <Menu className="mr-2 h-4 w-4" />
              <span>Business</span>
            </MyButton.Button>
          </MySheet.SheetDescription>

          <MySheet.SheetDescription>
            <MyButton.Button
              className="rounded-none align-middle w-full justify-start"
              variant={"ghost"}
            >
              <Users className="mr-2 h-4 w-4" />
              <span>Usuários</span>
            </MyButton.Button>
          </MySheet.SheetDescription>

          <MySheet.SheetDescription>
            <MyButton.Button
              className="rounded-none align-middle w-full justify-start"
              variant={"ghost"}
            >
              <ArrowDownUp className="mr-2 h-4 w-4" />
              <span>Transações</span>
            </MyButton.Button>
          </MySheet.SheetDescription>

          {/* <MySheet.SheetFooter>
            <MyButton.Button type="submit">Save changes</MyButton.Button>
          </MySheet.SheetFooter> */}
        </MySheet.SheetContent>
      </MySheet.Sheet>
    </div>
  );
};

export default SidebarComponent;
