import Container from "components/Container/index";
import { HeaderSection } from "components/HeaderSection";
import { PersonSection } from "./PersonSection";
import { Row } from "src/components/Row";

const AboutUs = () => {
  return (
    <section id="sobre">
      <Container verticalPadding>
        <Row>
          <div>
            <HeaderSection text="Algumas palavras" title="Sobre nós" />
          </div>
          <div>
            <PersonSection
              alt="Uma pessoa"
              src="/person.jpg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              name="Pablo Isnardi"
            />
          </div>
          <div>
            <PersonSection
              alt="Uma pessoa"
              src="/person.jpg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              name="Fabricio"
              reversed
            />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
