import { Pencil } from "lucide-react";

export const Profile = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 space-y-8 lg:space-y-16">
                    <div className="flex justify-center relative mb-8">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-full p-8">
                                <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-[4/4] object-cover rounded-full"/>
                                  <div className="absolute -bottom-15 -right-4 p-4 rounded-full glass shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <td style={{ "--size": 0.4 }}>
            <span className="data">0.2kg</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.6 }}>
            <span className="data">6kg</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.3 }}>
            <span className="data">0.2kg</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.1 }}>
            <span className="data">0.1kg</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 1 }}>
            <span className="data">10kg</span>
          </td>
        </tr>
      </tbody>
    </table>
                    <div className="tablecontainer">
                            <table className="charts-css column">
      <caption>Front End Developer Salary</caption>
      <tbody>
        <tr>
          <td style={{ "--size": 0.4 }}>
            <span className="data">car</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.6 }}>
            <span className="data">walking</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.75 }}>
            <span className="data">cycling</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 0.9 }}>
            <span className="data">train</span>
          </td>
        </tr>
        <tr>
          <td style={{ "--size": 1 }}>
            <span className="data">public transit</span>
          </td>
        </tr>
      </tbody>
    </table>
                        </div>
                        </div>
                </div>
        </section>
    );
}