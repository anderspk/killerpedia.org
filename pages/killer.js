import Layout from "../components/Layout";
import axios from "axios";

const KillerProfile = ({ killer }) => {
  console.log("killer", killer);
  return (
    <Layout>
      <div className="profile-container">
        <div className="img-container">
          <img src={killer.avatar} alt="" />
        </div>
        <div className="content-container">
          <div className="table-container">
            <table>
              <tbody>
                {Object.keys(killer).map(key => (
                  <tr key={key}>
                    <td>{key.replace(/_/g, " ")}</td>
                    <td>{killer[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h5>Summary:</h5>
          <p>
            On November 7, 1974, Carol DeRonch, 18, was in a Utah Shopping Mall
            when she was approached by Bundy, who told her that someone had been
            trying to break into her automobile. She thought that he was a
            police officer and Bundy later showed her a badge.
          </p>
          <p>
            Bundy asked her to accompany him to the car to see if anything was
            missing. Upon reaching the car the girl looked in and determined
            nothing was missing. He eventually asked her if she could go to the
            station to make a complaint. Bundy drove her in his Volkswagon, and
            pulled over on the way and forcibly placed a pair of handcuffs on
            her wrist. She screamed and fought her way outside the vehicle and
            eventually got away.
          </p>
          <p>
            Nine months later, Bundy was arrested fleeing police and handcuffs
            were found in his car. Bundy was convicted of Aggravated Kidnapping
            after waiving a jury trial and received a 1-15 year sentence. He
            escaped while in custody but was recaptured 6 days later. He escaped
            a second time and fled to Tallahassee, Florida, staying at a rooming
            house near the Florida State University Campus.
          </p>
          <p>
            During the early morning hours of Sunday, January 15, 1978, Bundy
            entered the Chi Omega sorority house and brutally attacked four
            women residing there. Margaret Bowman and Lisa Levy were killed, and
            Kathy Kleiner and Karen Chandler sustained serious injuries. Within
            approximately an hour of the attacks in the Chi Omega house, Bundy
            entered another home nearby and attacked a woman residing there,
            Cheryl Thomas. All five women were university students. All were
            bludgeoned repeatedly with a blunt weapon.
          </p>
          <p>
            Bundy was identified by a resident returning home to the Sorority
            House, just as he was leaving with a club in his hand. Lisa Levy and
            Margaret Bowman were killed by strangulation after receiving severe
            beatings with a length of a tree branch used as a club. Margaret
            Bowman's skull was crushed and literally laid open. The attacker
            also bit Lisa Levy with sufficient intensity to be identified as
            human bite marks.
          </p>
          <p>
            Bundy was arrested a month later in Pensacola. Of critical
            importance was the testimony of two forensic dental experts who
            testified concerning analysis of the bite mark left on the body of
            Lisa Levy. The experts both expressed to the jury their opinion that
            the indentations on the victim's body were left by the unique teeth
            of Bundy. Bundy was found guilty of two counts of first-degree
            murder, three counts of attempted first-degree murder, and two
            counts of burglary. For the two crimes of first-degree murder the
            trial judge imposed sentences of death.
          </p>
          <p>
            On February 9, 1978, Kimberly Leach, age 12, was reported missing
            from her junior high school in Lake City, Florida. Two months later,
            after a large scale search, the Leach girl's partially decomposed
            body was located in a wooded area near the Suwanee River.
          </p>
          <p>
            There were semen stains in the crotch of her panties found near the
            body. Two Lake City Holiday Inn employees and a handwriting expert
            established that Bundy had registered at the Lake City Holiday Inn
            the day before her disappearance under another name. A school
            crossing guard at the junior high school identified Bundy as leading
            a young girl to a van on the morning of the disappearance.
          </p>
          <p>
            Bundy was again convicted of murder and sentenced to death. This
            death sentence to be carried out a decade later.
          </p>
        </div>
      </div>
      <style jsx>{`
        .profile-container {
        }

        .img-container {
          background: black;
          display: flex;
        }

        img {
          margin: 0 auto;
        }

        table {
          border-collapse: collapse;
        }

        .table-container {
          border-radius: 5px;
          border: 1px solid #dcdcdc;
        }

        .content-container {
          padding: 1rem;
        }
      `}</style>
    </Layout>
  );
};

KillerProfile.getInitialProps = async context => {
  const { slug } = context.query;
  const { data: killer } = await axios.get(
    `http://localhost:3001/killers/${slug}`
  );

  return { killer };
};

export default KillerProfile;
