import { useEffect, useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";

const initTemplates = [
  {
    name: "Tabulio",
    description:
      "When you know you're a natural fit, the conversation is warm, you get that fuzzy feeling, and every fiber of your being says you're perfect for this job, there's no better design than Tabulio",
    sampleCoverUrl:
      "https://s3-alpha-sig.figma.com/img/6047/3b28/8477294a91025f2e0072853c7daa9c63?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JB5GNcfkMNoaY0PGuylzIgnqCRPhpNxFEtAFHs4GbUnsbI1uPIjh7erOrOzuXT7rqzsShM-oXLIERs5~4ZgqjLxLSXqvYPOWX54Mt~fsaDJhINsoSoJLo6BjsIK95Pg~J6In5QBzfdJ-Vao2ATBO5C2cek8aTu3ZEgyayJMRZpqk8Sm9yvIPp2kOgzqMVU6jGe7H7WI8PcTzO~AiN2f9yN~H4pSAj5GBK1WJz0dVlMgdgMX4HUI7b~f6ylb1YGybLOZw1YcqFlebwpbWnv8DKjtjuRJRtVGZpImcXqOmkS3bptrJWCGTyrqRT7mxGYlq2kfu9LHAQyEfCbzfGuLMEg__",
    palette: {
      primary: "#030303",
      secondary: "#FECB00",
      auxiliar: "#2F635A",
    },
  },
  {
    name: "Reinhard",
    description:
      "A place for everything and everything in it's place. Build your career on a solid foundation with the measured design elements in Blueprint. You're a total stud and you're sure to nail the interview.",
    sampleCoverUrl:
      "https://s3-alpha-sig.figma.com/img/692b/c424/7ec25343459b4835064406c2dcbbdd89?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CixwfDq9VsdpBLV360AJ7qyIF~AblGBUBEUw23SKcGsldboBGkG2vRR-EP8RTGByAqSJyJ926BsbOsuXxm7sjFimav1GCfAvIRRc8bqpHSZyj2kHV5QoHo1ALwbiNe9Bl88LcUtc4gXRy7YW2EteycO4tBuaIFdRf1sPlkVeHZdrlmHbWisJldWbSRcfY5wn9B50QXFk4xiURI7cioRKoYRq5w7KEbLy~rRdeer2m7o9wwmauZAqV9s0UuFT86Io9NI5VsLxy~9nLpHT2T~OYS~n9UtEjRZ3Pnf0YUSzclECzjN-jb9Hm-3Klgz~WPbskpvr2EqTTl4lhsrKahvWEQ__",
    palette: {
      primary: "#38598b",
      secondary: "#a2a8d3",
      auxiliar: "#9fd3c7",
    },
  },
  {
    name: "Zidio",
    description:
      "A place for everything and everything in it's place. Build your career on a solid foundation with the measured design elements in Blueprint. You're a total stud and you're sure to nail the interview.",
    sampleCoverUrl:
      "https://s3-alpha-sig.figma.com/img/b2d6/30b7/f60536a6dff20c0f4a19c1e19852a3bf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RxPs2NP4z00YC91~QIbnTyLZe7NPjAtIrN8pscZy5HomGIFiHmv5KdwBut6d2~hyxx-fuIlP5CvANT92YEeNa7xIARfcmqWb9Rfmb1Q5UiNvcwcpJ88n6R-U7b-jhWyf7F5fqZnlsAqvAsqROkO4cSST9uBrCemzF3QPaQs457p70~bvDQjA8fSfsjIMLmd~dBMaYgROKPNkiP-bhPJC2ZNQY2ArGAzAttpEnbtW1Hh-A1cHMcUG2vxuLMxEMl1b8cxPP8yp-KNVDluRSc~JBsrF83oNh3JIyOo~Pa3Gz5MhOtgDKuETyAWfk4TQLv1coERT4huKeQZMfzppVAFgkg__",
    palette: {
      primary: "#222222",
      secondary: "#2F635A",
      auxiliar: "#4E4D4D",
    },
  },
];

export const TemplateSelector = () => {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTemplates(initTemplates);
  });

  return (
    <div className="w-full h-full flex justify-start items-center px-[300px]">
      <div
        className="-z-10  w-[590px] bg-[url(https://s3-alpha-sig.figma.com/img/4297/04a5/77bd8e482186e29e5bdb8b82b2643d77?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DD-ugrtG38VYzakJP81hQSzh~xNyWVD-gOC3Zw7j1eR1cvixV0TwHZ8JrVB6qo7Ym8fu8CxOnG1jkGdsmYbRGU4jEvWNljcvN8tXqAWCDx0ldzpv2Ihj2u-bYV8hZgreMAx4pT84qNRq9bUtHtZcuwAW5RASUkBGLe1Tk9DdS~TLFJqUtQyIIw1jKg8rmxfjEtdQgc~mcVnTgAYahFCAFr4v9YzpsNMPQez1Gf6VQYLm0x4kCP~xpBkpEBV1LyTg7InoxTqOQa8AG0Nbdi4stLsSivoqL4d7q5IqaYKhWcfR0FgEXc4T9IL3xYBKT0Lm2ld9cErBLxnNPBV6f1V6HQ__)] 
        absolute top-0 bottom-0 right-0"
      ></div>
      <div className="flex flex-nowrap flex-row gap-x-[200px]">
        <div className="space-y-10 max-w-[500px]">
          <div className="font-bold text-5xl ">
            {" "}
            <span className="text-[#B1B1B1]"> {selected + 1} </span>{" "}
            {templates[selected]?.name}
          </div>
          <div className="text-xl font-medium">
            {" "}
            {templates[selected]?.description}{" "}
          </div>
          <div className="flex gap-x-2">
            <div
              className="w-16 h-16"
              style={{ background: templates[selected]?.palette.primary }}
            ></div>
            <div
              className="w-16 h-16"
              style={{ background: templates[selected]?.palette.secondary }}
            ></div>
            <div
              className="w-16 h-16"
              style={{ background: templates[selected]?.palette.auxiliar }}
            ></div>
          </div>
          <NavLink className="btn-primary w-full py-3 text-center" to={"/build/builder"}>
            Select this template
          </NavLink>
        </div>
        <div className="relative">
          {selected > 0 && (
            <button
              className="
              absolute
              -left-8
              top-[45%]
              flex items-center justify-center text-3xl font-bold
              rounded-full w-14 h-14 bg-[#FDFDFD] shadow-[0px_0px_23px_5px_rgba(0,0,0,0.1)] "
              onClick={() => {
                setSelected(Math.max(selected - 1, 0));
              }}
            >
              <LuArrowLeft></LuArrowLeft>
            </button>
          )}
          <div
            style={{
              background: `url(${templates[selected]?.sampleCoverUrl})`,
              width: "400px",
              height: "457px",
            }}
            className="!bg-center !bg-cover"
          ></div>
          {selected < 2 && (
            <button
              className="
              absolute
              -right-8
              flex items-center justify-center text-3xl font-bold
              top-[45%]
              rounded-full w-14 h-14 bg-[#FDFDFD] shadow-[0px_0px_23px_5px_rgba(0,0,0,0.1)] "
              onClick={() => {
                setSelected(Math.min(selected + 1, 2));
              }}
            >
              <LuArrowRight></LuArrowRight>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
