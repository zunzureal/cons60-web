import Footer from "../components/Footer";

export default function RelatedInfo() {
  return (
    <div id="related" data-testid="related-doc">
      <div className="bg-[#310]">
        <div className="md:w-5/6 mx-auto min-h-screen">
          <h1 className="text-center lg:text-5xl sm:text-4xl text-3xl font-bold text-header pt-40">
            ข้อมูลที่เกี่ยวข้อง
          </h1>
          <div className="justify-center text-center text-lg px-8 py-20">
            <a className="doc" href="./pdf/2562_ความมุ่งหมาย_คำอธิบาย_รธน_2560.pdf" target="_blank">
              เอกสารความมุ่งหมายและคำอธิบายประกอบรายมาตราของรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560
            </a>
            <a className="doc" href="./pdf/2561_ความในใจของคณะกรรมการร่างรัฐธรรมนูญ2560_ส.pdf" target="_blank">
              เอกสารความในใจของคณะกรรมการร่างรัฐธรรมนูญ 2560
            </a>
            <a className="doc" href="./pdf/581005_105_240งพิเศษ.pdf" target="_blank">
              เอกสารคำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ ๓๔/๒๕๕๘ เรื่อง
              การอำนวยความสะดวกในการจัดทำร่างรัฐธรรมนูญ
            </a>
            <a className="doc" href="./pdf/2054161.pdf" target="_blank">
              เอกสารประกาศคณะรักษาความสงบแห่งชาติ เรื่อง แต่งตั้งคณะกรรมการร่างรัฐธรรมนูญ
            </a>
            <a className="doc" href="https://library.parliament.go.th/th/2017-Constitution-of-the-Kingdom" target="_blank" rel="noreferrer">
              ดัชนีช่วยค้นการพิจารณาร่างรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560
            </a>
            <a className="doc" href="https://dl.parliament.go.th/handle/20.500.13072/615371/browse" target="_blank" rel="noreferrer">
              บันทึกการประชุมคณะกรรมการร่างรัฐธรรมนูญ ครั้งที่ 1-501
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
