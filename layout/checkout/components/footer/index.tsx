import { PublicIcon } from "components";
import { Container } from "components/common";
import * as Styles from "./styles";

export function Footer() {
  return (
    <Styles.Footer>
      <Container>
        <Styles.FlagList>
          <Styles.FlagItem>
            <PublicIcon name="cardAmex" />
          </Styles.FlagItem>
          <Styles.FlagItem>
            <PublicIcon name="cardDiners" />
          </Styles.FlagItem>
          <Styles.FlagItem>
            <PublicIcon name="cardElo" />
          </Styles.FlagItem>
          <Styles.FlagItem>
            <PublicIcon name="cardMastercard" />
          </Styles.FlagItem>
          <Styles.FlagItem>
            <PublicIcon name="cardPix" />
          </Styles.FlagItem>
          <Styles.FlagItem>
            <PublicIcon name="cardVisa" />
          </Styles.FlagItem>
        </Styles.FlagList>
      </Container>
    </Styles.Footer>
  );
}
