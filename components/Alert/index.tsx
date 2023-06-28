import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type alertType = {
  children: React.ReactNode,
  alertDialogTitle: String,
  alertDialogDescription?: String,
  AlertFooter: JSX.Element
};

export function AlertComponent(props: alertType) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {props.children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.alertDialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
           {props.alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {props.AlertFooter}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertComponent;