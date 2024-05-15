import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";

interface Color {
  hex: string;
  rgb: string;
}

interface HexRgbProps {
  colors: Color[];
}

const handleCopyHex = (color: any) => {
  navigator.clipboard.writeText(color);
  toast("Copied", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const HexRgbTabs: React.FC<HexRgbProps> = ({ colors }) => {
  return (
    <Tabs defaultValue="RGB" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="RGB">RGB</TabsTrigger>
        <TabsTrigger value="HEX">HEX</TabsTrigger>
      </TabsList>
      <TabsContent value="RGB">
        <Card>
          <CardHeader>
            <CardTitle>RGB Values</CardTitle>
            <CardDescription>
              RGB values represent the intensity of red, green, and blue light
              in a color, ranging from 0 to 255 for each component.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <div className="flex flex-wrap gap-5">
                {colors?.map((color, index) => (
                  <Button
                    onClick={() => handleCopyHex(color.rgb)}
                    key={index}
                    size="rgb"
                    variant="secondary"
                    className="flex-shrink-0"
                  >
                    {color.rgb}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="HEX">
        <Card className="">
          <CardHeader>
            <CardTitle>HEX Values</CardTitle>
            <CardDescription>
              Hex values are six-digit codes representing colors in hexadecimal
              notation, with two digits each for red, green, and blue components
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="space-y-1">
              <div className="flex gap-4">
                {colors?.map((color, index) => (
                  <Button
                    onClick={() => handleCopyHex(color.hex)}
                    key={index}
                    size="small"
                    variant="secondary"
                    className="flex-shrink-0"
                  >
                    {color.hex}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
