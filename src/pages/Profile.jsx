import { Pencil } from "lucide-react";

export const Profile = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="grid lg:grid-cols-3 grid-rows-2 gap-8 lg:gap-16 items-center mb-16 space-y-6 lg:space-y-10">
                    <div className="flex justify-center relative mb-8">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-full p-8">
                                <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-[4/4] object-cover rounded-full"/>
                                  <div className="absolute -bottom-0 -right-10 p-4 rounded-full glass shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <Pencil className="w-8 h-8 text-title"/>
                                  </div>
                            </div>

                            <div className="text-center mb-4 pt-5">
                                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl roboto-flex-body font-bold text-title mb-2 break-words">
                                    @Steven_The__Seagull
                                </h2>
                            </div>
                        </div>
                    </div>
                       <table className="charts-css column">
      <caption>Front End Developer Salary</caption>
      <tbody>
        <tr>
          <td style={{ "--size": 0.4, "color": "orange" }}>
            <span className="data">$40K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.6 }}>
            <span className="data">$60K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.75 }}>
            <span className="data">$75K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.9 }}>
            <span className="data">$90K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 1 }}>
            <span className="data">$100K</span>
          </td>
        </tr>
      </tbody>
    </table>
                    <div className="tablecontainer">
                            <table className="charts-css column">
      <caption>Front End Developer Salary</caption>
      <tbody>
        <tr>
          <td style={{ "--size": 0.4, "--color": "orange" }}>
            <span className="data">$40K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.6 }}>
            <span className="data">$60K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.75 }}>
            <span className="data">$75K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.9 }}>
            <span className="data">$90K</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 1 }}>
            <span className="data">$100K</span>
          </td>
        </tr>
      </tbody>
    </table>
                        </div>
 
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Co2 Saved
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Miles Travelled
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Preferred Mode of Transport
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Total Points
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Shirley
                </th>
                <td class="px-6 py-4">
                    56.4kg CO2
                </td>
                <td class="px-6 py-4">
                    160 miles
                </td>
                <th scope="col" class="px-6 py-3 font-medium">
                    Train
                </th>
                <td class="px-6 py-4">
                    70
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Edgar
                </th>
                <td class="px-6 py-4">
                    56.4kg CO2
                </td>
                <td class="px-6 py-4">
                    60 miles
                </td>
                <th scope="col" class="px-6 py-3 font-medium">
                    Cycling
                </th>
                <td class="px-6 py-4">
                    140
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Henry
                </th>
                <td class="px-6 py-4">
                    3kg CO2
                </td>
                <td class="px-6 py-4">
                    100 miles
                </td>
                <th scope="col" class="px-6 py-3 font-medium">
                    Car
                </th>
                <td class="px-6 py-4">
                    12
                </td>
            </tr>
            <tr class="bg-neutral-primary">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    Susanne
                </th>
                <td class="px-6 py-4">
                    11.6kg CO2
                </td>
                <td class="px-6 py-4">
                    20 miles
                </td>
                <th scope="col" class="px-6 py-3 font-medium">
                    Walking
                </th>
                <td class="px-6 py-4">
                    78
                </td>
            </tr>
        </tbody>
    </table>
                        </div>
                </div>
        </section>
    );
}