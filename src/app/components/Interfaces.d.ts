interface Ires {
  type: string;
  data: Idata | Ierr;
}

interface Idata {
  city: string;
  degree: number;
  icon: string;
}

interface Ierr {
  cod: number;
  message: string;
}
