//Next components
import Link from "next/link";
// UI
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
//Icons
import { ArrowDownUp, Building2, Menu, Users } from "lucide-react";

type data = {
  description: string;
  icon: string;
  svgIcon: string;
}[];

const fetchSidebar = async function () {
  const res = await fetch("api/sidebar");
  const menuList: data = await res.json();
  return menuList;
};

const SidebarComponent = () => {
  return (
    <div className="flex flex-col space-y-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"link"} className="h-12 w-12">
            <Menu size={50}></Menu>
          </Button>
        </SheetTrigger>

        <SheetContent className="pt-0 px-0" position={"left"} size="lg">
          <SheetHeader className=" p-3">
            <SheetTitle>MENU</SheetTitle>
          </SheetHeader>

          <SheetDescription>
          <Link href={"/business"}>
            <Button
              className="rounded-none align-middle w-full justify-start"
              variant={"ghost"}
            >
              <Building2 className="mr-2 h-4 w-4" />
              <span>Negócios</span>
            </Button>
            </Link>
          </SheetDescription>

          <SheetDescription>
            <Link href={"/user"}>
              <Button
                className="rounded-none align-middle w-full justify-start"
                variant={"ghost"}
              >
                <Users className="mr-2 h-4 w-4" />
                <span>Usuários</span>
              </Button>
            </Link>
          </SheetDescription>

          <SheetDescription>
            <Button
              className="rounded-none align-middle w-full justify-start"
              variant={"ghost"}
            >
              <ArrowDownUp className="mr-2 h-4 w-4" />
              <span>Transações</span>
            </Button>
          </SheetDescription>

          {/* <Sheet.SheetFooter>
            <Button.Button type="submit">Save changes</Button.Button>
          </Sheet.SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SidebarComponent;
