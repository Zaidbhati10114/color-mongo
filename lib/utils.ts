import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 
// SAMPLE DATA FROM DATABASE
//{"_id":{"$oid":"65e0d30a89f19e281ec3a561"},"one":"114232","two":"87A922","three":"FCDC2A","four":"F7F6BB"}
// {"_id":{"$oid":"65e0d9a589f19e281ec3a562"},"one":"FFE6E6","two":"E1AFD1","three":"AD88C6","four":"7469B6"}
// {"_id":{"$oid":"65e0da1689f19e281ec3a563"},"one":"6420AA","two":"FF3EA5","three":"FF7ED4","four":"FFB5DA"}
// {"_id":{"$oid":"65e0da7489f19e281ec3a564"},"one":"59D5E0","two":"F5DD61","three":"FAA300","four":"F4538A"}
// {"_id":{"$oid":"65e0db2789f19e281ec3a565"},"one":"A5DD9B","two":"C5EBAA","three":"F6F193","four":"F2C18D"}
// {"_id":{"$oid":"65e0db8f89f19e281ec3a566"},"one":"5E1675","two":"EE4266","three":"FFD23F","four":"337357"}

// SAMPLE TEST CASE PASSED
// <div>
//       {data?.map((item: any) => (
//         <div key={item.id}>
//           <h1>one: {item.one}</h1>
//           <h1>two: {item.two}</h1>
//           <h1>three: {item.three}</h1>
//           <h1>four: {item.four}</h1>
//         </div>
//       ))}
//     </div>