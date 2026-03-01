export const Profile = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="relative">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-full p-5">
                                <img src="/stevenPFP.jpg" alt="User PFP" className="w-full aspect-[4/4] object-cover rounded-full"/>
                            </div>

                            <div className="relative p-10 flex justify-center">
                                <h2 className="text-4xl roboto-flex-body font-bold">
                                    @Steven_The__Seagull
                                </h2>
                            </div>

                            <div className="relative glass rounded-full p-8 flex justify-center">
                                <h3 className="roboto-flex-body text-xl">
                                    Yo yo yo, I'm Steven the Seagull!
                                    <br/>
                                </h3>
                            </div>
                        </div>
                    </div>
                       <table className="charts-css column">
      <caption>Front End Developer Salary</caption>
      <tbody>
        <tr>
          <td style={{ "--size": 0.4 }}>
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
          <td style={{ "--size": 0.4 }}>
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
                        </div>
                </div>
        </section>
    );
}