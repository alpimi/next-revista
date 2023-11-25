import Image from "next/image";
import Link from "next/link";
import { otros, publicidad, secciones } from "@/app/lib/footer-data";

export const CustomizedFooter = () => {
  return (
    <>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
};

const SocialMedia = () => (
  <div className="flex justify-between w-full">
    <Image src="/facebook.svg" alt="Logo" width={50} height={20} priority />
    <Image src="/twitter.svg" alt="Logo" width={50} height={20} priority />
    <Image src="/in.svg" alt="Logo" width={50} height={20} priority />
    <Image src="/youtube.svg" alt="Logo" width={50} height={20} priority />
  </div>
);

const Logo = ({ url }: { url: string }) => <Image className="mx-auto" src={url} alt="Logo" width={250} height={40} priority />;

const EditorialLogo = () => (
  <div className="flex gap-x-4 w-full justify-center">
    <Image src="/editorialpueblo.svg" className="mb-1 md:mb-0" alt="Logo" width={100} height={20} priority />
    <h4 className="flex mx-4 items-end  font-semibold text-lg  text-gray-300">
      Una revista de
      <br />
      Editorial Pueblo y Educación
    </h4>
  </div>
);

const CopyRight = ({ className }: { className?: string }) => (
  <p className={`order-6 text-xs my-4 text-gray-300 w-full ${className}`}>© 2023 Editorial Pueblo y Educación.Todos los derechos reservados</p>
);

const SectionList = ({ className }: { className?: string }) => (
  <div className="w-full">
    <h4 className="text-xl text-white mb-4">Secciones</h4>
    <ul className={`gap-4 ${className}`}>
      {secciones.map((s, i) => (
        <Link
          className={`text-gray-300 text-lg ${s.text_alignment}
          lg:text-left`}
          key={s.name}
          href={s.href}
        >
          {s.name}
        </Link>
      ))}
    </ul>
  </div>
);

const SimpleLists = ({ title, list }: { list: { name: string; href: string }[]; title: string }) => (
  <div className="">
    <h4 className="text-xl text-white mb-4">{title}</h4>
    <ul className="space-y-4 flex flex-col">
      {list.map((o, i) => (
        <Link className={`text-gray-300 text-lg`} key={o.name} href={o.href}>
          {o.name}
        </Link>
      ))}
    </ul>
  </div>
);

const FooterDesktop = () => (
  <footer className="bg-gris-oscuro p-8 gap-32 w-full hidden lg:flex">
    <div className="flex flex-col shrink-0 gap-16">
      <div className="space-y-8">
        <Logo url="/logotipo.svg" />
        <SocialMedia />
      </div>
      <EditorialLogo />
    </div>
    <div className="flex flex-col justify-between w-full">
      <div className="grid grid-cols-3 gap-8">
        <SectionList className="flex flex-col" />
        <SimpleLists list={otros} title="Otros" />
        <SimpleLists list={publicidad} title="Publicidad" />
      </div>
      <CopyRight className="text-end" />
    </div>
  </footer>
);

const FooterMobile = () => (
  <footer className="bg-gris-oscuro p-8 grid place-content-center gap-5 w-full lg:hidden">
    <Logo url="/capa1.svg" />
    <SocialMedia />
    <SectionList className="grid grid-cols-3" />
    <div className="grid grid-cols-2 gap-2">
      <SimpleLists list={publicidad} title="Publicidad" />
      <SimpleLists list={otros} title="Otros" />
    </div>
    <EditorialLogo />
    <CopyRight className="text-center" />
  </footer>
);
