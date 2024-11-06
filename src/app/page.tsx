import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 00df81
// 06302b

// 032221
// 0b453a

// 03624c
// 09544
// f1f7f6
//
//#03624C
//#021716
//#01E081
//

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center m-5 flex-col gap-2">
        <h4 className="text-center">Buttons</h4>
        <Button variant="default">Button</Button>
        <Button>
          Kom i gang
          <ArrowRight />
        </Button>
        <Button>
          Kontakt oss
          <Mail />
        </Button>
        <div className="flex gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="mt-10 w-1/2">
          <h4 className="text-center">Accordion</h4>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Du booker analyse av ditt bygg
              </AccordionTrigger>
              <AccordionContent>
                Vi innhenter informasjon om ditt bygg, og analyserer data i våre
                systemer
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Du booker analyse av ditt bygg
              </AccordionTrigger>
              <AccordionContent>
                Vi innhenter informasjon om ditt bygg, og analyserer data i våre
                systemer
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mb-56">
          <h4 className="text-center">Select</h4>
          <Select>
            <SelectTrigger className="w-[180px] text-[#03624C]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-[#030F0E] w-full h-auto flex gap-7">
          <div className="bg-[#06302b] w-1/2 p-10 rounded-lg m-5 flex flex-col items-center gap-5 h-[250px]">
            <h5 className="text-[#f1f7f6] text-center text-lg font-bold">
              Energisystemer sløser
            </h5>
            <p className="text-[#f1f7f6]">
              og de er utfordrende å optimalisere Det er gjort store
              investeringer i moderne norske bygg.
            </p>
            <Button className="w-32">Kontakt oss</Button>
          </div>
          <div className="bg-[#03624c] w-1/2 p-10 rounded-lg m-5 flex flex-col items-center gap-5 h-[250px]">
            <h5 className="text-[#f1f7f6] text-center text-lg font-bold">
              Energisystemer sløser
            </h5>
            <p className="text-[#f1f7f6]">
              og de er utfordrende å optimalisere Det er gjort store
              investeringer i moderne norske bygg.
            </p>
            <Button variant="secondary" className="w-32">
              Kontakt oss
            </Button>
          </div>
        </div>
        <div className=" w-full h-[500px]"></div>
      </div>
    </>
  );
}
