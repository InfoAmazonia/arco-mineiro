import React, { Component } from 'react';
import StoryMedia from 'components/StoryMedia';

class GoldMining extends Component {
  render () {
    return (
      <article>
        <p><strong>COVERED IN DIRT</strong>, a miner throws mineral-rich rocks in a spinning mechanic mill that crushes the stones to be further processed with mercury. The gold that is extracted comes from the heavily contested Venezuelan deposits and will end up on the world market in the form of jewelry, locked up in a bank or used in electronics. It does not really matter if the gold has a legal or an illegal origin, whether it is mined in by companies or gang controlled mines – the Arco Minero in Venezuela is a dark symbiosis of both worlds.</p>

        <p>What matters most is that the miners risk their health and lives as working conditions are unsafe and mining areas violently disputed. The environment is not taken into consideration by enclaves of subsistence miners and the brutal forces that control them, but moreover is not a factor for the government that created a legal framework around digging it all up.</p>

        <p><StoryMedia media={{
          id: 'video-1',
          type: 'video',
          data: {
            sources: [
              'https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny.ogv'
            ]
          }
        }}>Four areas in Bolívar state, decreed in 2016 as a mining zone and branded the Arco Minero del Orinoco</StoryMedia> (spanish for “Orinoco Mining Arch”), overlap many legally protected environmental and indigenous territories, and will dictate their future destruction.</p>

        <p><StoryMedia media={{
          id: 'video-2',
          type: 'video',
          data: {
            sources: [
              'https://archive.org/download/electricsheep-flock-244-32500-2/00244%3D32592%3D22973%3D22551.ogv'
            ]
          }
        }}>Alexander Luzardo, a former senator and doctor in political and environmental law, has been personally involved in Venezuela’s environmental legislation.</StoryMedia> He wrote the environmental standards for the current constitution, in place since 1999, while bearing in mind that Venezuela needs to protect environmentally important regions, but saw his decrees violated by the Arco Minero. “The Arco Minero is illegal. Also because it denies the existence and creation of protected areas by decree,” Luzardo says in an interview in a small coffee shop on the campus of the Central University of Venezuela (UCV), in Caracas, where he currently teaches.</p>

        <p><StoryMedia media={{
          id: 'map-1',
          type: 'map',
          data: {}
        }}>The professor has a very grim prediction for the country. “This is the easiest road for environmental destruction in Venezuela.</StoryMedia> The big contribution from Venezuela to the destruction of the planet,” Luzardo says. The professor adds that Venezuela made some impressive progress in terms of environmental protection and fears that the <StoryMedia media={{
          id: 'image-1',
          type: 'image',
          data: {
            src: 'https://ei.marketwatch.com/Multimedia/2016/02/11/Photos/MG/MW-EF363_goldmi_20160211065835_MG.jpg?uuid=c7adf846-d0b6-11e5-8ca0-0015c588e0f6'
          }
        }}>Arco Minero will undo all progress: “This project is the worst answer to the crisis and the denial of the whole environmental project.”</StoryMedia></p>

        <p><StoryMedia media={{
          id: 'map-2',
          type: 'map',
          data: {
            layers: [
              {
                url:"https://{s}.tiles.mapbox.com/v4/infoamazonia.indigena_raisg_1-6,infoamazonia.indigena_raisg_interact_7-12/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g"
              }
            ]
          }
        }}>There is not much known about gold mining or mining in general</StoryMedia> in the country that has build its complete economy on its nationalized oil industry. Venezuela not only possesses world's largest oil supplies, but the government claims to have the second biggest gold reserve too. If Venezuela is able to certify the deposits, it would undoubtedly be welcome news during Venezuela’s darkest hour.</p>

        <p>The country finds itself in a financial and political turmoil since a few years already, but current levels of hyperinflation and shortages in basic products are driving the economy to rock bottom. Venezuela’s government needs good news and sounding solutions, hence the announcement that a significant part of the country will be opened for a new motor of economic development: mining.</p>
        <p>The country finds itself in a financial and political turmoil since a few years already, but current levels of hyperinflation and shortages in basic products are driving the economy to rock bottom. Venezuela’s government needs good news and sounding solutions, hence the announcement that a significant part of the country will be opened for a new motor of economic development: mining.</p>
      </article>
    )
  }
}

export default GoldMining;
