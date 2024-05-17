import { Leaf } from "../../icons";
import Item2 from "../services/item2";

const Header = () => {
  return (
    <div className="header">
      <div className="w-100  border-b">
        <header className="w-100  max-width d-flex justify-content-between align-items-center mx-auto">
          <div className="logo">
            <img className="w-100" src="/img/BRAND.png" alt="" />
          </div>
          <nav className="nav">
            <ul className="d-flex column-gap-4">
              <li>
                <button className="border rounded nav-btn fw-light text-light px-4">
                  Teklif Al
                </button>
              </li>
              <li className="fw-semibold">Kurumsal</li>
              <li>Lojistik Hizmetlerimiz</li>
              <li>Kariyer</li>
              <li>Iletisim</li>
              <li>Blog</li>
              <li>TR</li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="dropdown position-absolute bg-light w-100 ">
        <div className="pt-4 pb-4 max-width w-100 d-flex gap-4 ">
          <div>
            <div className="d-flex">
              <ul>
                <li className="fw-semibold">Hakkimizda</li>
                <li>Tarihcemiz</li>
                <li>Sponsorluklar</li>
                <li>Is Ortakligi</li>
              </ul>
              <ul>
                <li className="fw-semibold">İnsan Kaynakları</li>
                <li>İnsan Kaynakları Politikamız</li>
                <li>Kariyer</li>
              </ul>
              <ul>
                <li className="fw-semibold">Yönetim Sistemleri</li>
                <li>Sertifikalarımız</li>
                <li>Politikalar</li>
                <li>Veri Gizliliği ve Güvenlik (KVKK)</li>
              </ul>
              <ul>
                <li className="fw-semibold">Lojistik Rehberi</li>
                <li>Lojistik Terimler Sözlüğü</li>
              </ul>
            </div>{" "}
            <div className="d-flex  mt-10">
              <ul>
                <li className="fw-semibold text-success">Sürdürülebilirlik</li>
                <li>
                  Yeşil Lojistik
                  <i className="m-2">
                    <Leaf />
                  </i>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="px">
            <Item2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
