import contributors from "./contributors.json";
import communityLinks from "./community_links.json";

const AboutTab = () => {
  return (
    <div className='research-tab px-2'>
      <img
        src='https://images.unsplash.com/photo-1545631036-0604522cf8a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=40'
        className='img-fluid'
        style={{borderRadius:'10px'}}
      />
      <h2 className='mt-4'>Omdena Pakistan Chapter</h2>
      <p>
        The project’s goal is to use Pakistan's Avaiability of electricity
        dataset to identify sites that are most suitable for solar panel
        installation as a greener energy source through data analysis.
      </p>

      <h2>Contributors</h2>
      <p>Meet the people who made this project possible.</p>

      <div className='contributors'>
        {contributors.map((contributor: any, index: number) => {
          return (
            <a href={contributor.url} target='_blank'>
              <div className='contributor' key={index}>
                <img src={contributor.profileImage} className='avatar' />
                <div className='info'>
                  <span className='name'>{contributor.name}</span>
                  <span className='info'>{contributor.info}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <br />

      <h2>Join the Community</h2>
      <p>Learn more about Omdena and Join the community!</p>

      <div className='contributors'>
        {communityLinks.map((contributor: any, index: number) => {
          return (
            <a href={contributor.url} target='_blank'>
              <div className='contributor' key={index}>
                <img src={contributor.profileImage} className='avatar' />
                <div className='info'>
                  <span className='name'>{contributor.name}</span>
                  <span className='info'>{contributor.info}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTab;
