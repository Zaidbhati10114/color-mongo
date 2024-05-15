import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AboutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="about">Developer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Color Palettes
            </h2>
            <p className="text-gray-600 mt-2">
              A website for developers to quickly copy color codes.
            </p>
          </div>
          <div className="px-4 py-2">
            <p className="text-gray-700">Why it&apos;s made:</p>
            <p className="text-gray-600 mt-2">
              To help developers speed up the development process by providing
              easily accessible color codes.
            </p>
          </div>
          <div className="px-4 py-2">
            <p className="text-gray-700">
              Made by:<span className="font-bold text-lg ml-1">Zaid Bhati</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
