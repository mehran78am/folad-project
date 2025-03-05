import img6 from "../../assets/img/6.webp";
import img7 from "../../assets/img/7.webp";
import Angel from "../../assets/img/Angel-300x225.webp";
import Beam from "../../assets/img/Beam-300x200.webp";
import ColdRolled from "../../assets/img/Cold-Rolled-300x169.webp";
import HotRolled from "../../assets/img/Hot-Rolled-300x200.webp";
import Pipe from "../../assets/img/Pipe-300x169.webp";
import Profile from "../../assets/img/Profile-300x200.webp";
import Rebar from "../../assets/img/Rebar-300x200.webp";
import UChannel from "../../assets/img/U-Channel-300x200.webp";
import img2 from "../../assets/img/2.webp";
import img3 from "../../assets/img/3.webp";
import img4 from "../../assets/img/4.webp";
import slider1 from "../../assets/img/slider-top-1.webp";
import slider2 from "../../assets/img/slider-top-2.webp";
import logo from "../../assets/img/logo.svg";
import about1 from "../../assets/img/about1.webp";
import about2 from "../../assets/img/about2.webp";

export const logoImage: string = logo;
export const aboutImage: string[] = [about1, about2];
interface Iitem1 {
  src: string;
  name: string;
  position: string;
  tel: string;
  Pnumber: number;
  contact: string;
}
export const item1: Iitem1[] = [
  {
    src: img2,
    name: "امیر فراهانی",
    position: "واحد نبشی",
    tel: "021-12345 - 35 داخلی",
    Pnumber: 0,
    contact: "#",
  },
  {
    src: img3,
    name: "امین خدادادی",
    position: "واحد ورق گرم",
    tel: "021-12345 - 36 داخلی",
    Pnumber: 0,
    contact: "#",
  },
  {
    src: img4,
    name: "سعید قاضی مرادی",
    position: "واحد لوله",
    tel: "021-12345 - 37 داخلی",
    Pnumber: 0,
    contact: "#",
  },
];

export const item2: string[] = [slider1, slider2];

interface Igallery {
  src: string;
  content: string;
}
interface IarticleSection {
  src: string;
  title: string;
  content: string;
}
export const articleSection: IarticleSection[] = [
  {
    src: img7,
    title: " آهن زنگ نزن چیست و چه کاربردی دارد؟",
    content:
      "یکی از پرکاربردترین فولادهایی که در صنایع مختلف کاربرد بسیاری دارد؛ آهن زنگ نزن است. همان گونه که از نام این محصول مشخص...",
  },
  {
    src: img6,
    title: " آهن زنگ نزن چیست و چه کاربردی دارد؟",
    content:
      "یکی از پرکاربردترین فولادهایی که در صنایع مختلف کاربرد بسیاری دارد؛ آهن زنگ نزن است. همان گونه که از نام این محصول مشخص...",
  },
];

export const gallery: Igallery[] = [
  {
    src: Angel,
    content: "نبشی",
  },
  {
    src: Beam,
    content: "تیرآهن",
  },
  {
    src: ColdRolled,
    content: "ورق سرد",
  },
  {
    src: HotRolled,
    content: "ورق گرم",
  },
  {
    src: Pipe,
    content: "لوله",
  },
  {
    src: Profile,
    content: "پروفیل",
  },
  {
    src: Rebar,
    content: "میلگرد",
  },
  {
    src: UChannel,
    content: "ناودانی",
  },
];
