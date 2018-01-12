import React from "react";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";

export default () => (
  <article>
    <Container>
      <Note>
        <p>
          For three months I traveled Venezuela’s disputed mining areas. In my
          visits to the Amazonas and Bolívar states I have been confronted with
          illegal armed groups, indigenous communities repressed by Colombian
          guerrillas and enclaves of informal miners tormented by malaria.
        </p>
        <p>
          Problems related to Venezuela’s current crisis such as widespread
          corruption, a lack of cash money, fuel shortages and a general culture
          of fear made fieldwork a rather complicated experience.
        </p>
        <p>
          An illegal detention by the National Guard almost prematurely ended
          this investigation, but the intervention, guidance and support of
          various organizations and individuals made it possible that we can
          present this project. El Correo del Caroni helped with a part of the
          investigation.
        </p>
        <p>
          In this journey, I talked to miners, companies, academics, indigenous,
          politicians and activists and gathered exclusive material on Latin
          America’s most underreported resource conflict.
        </p>
      </Note>
      <Paragraph>
        <StoryMedia
          media={{
            id: "video-1",
            type: "youtube",
            data: {
              id: "6sWVoFaH7Nc"
            }
          }}
        >
          <strong>With muddy hands</strong>, a miner throws mineral-rich rocks
          in a spinning mechanic mill that crushes the stones to be processed
          with mercury
        </StoryMedia>. At a small distance, a few soldiers hang around. The
        military escorted us during this visit in the green hills next to El
        Callao, one of many heavily contested mining hotspots in Venezuela. “A
        shootout or a massacre could happen any moment, all days were like
        this,” another miner enthusiastically tells about the violent behaviour
        applied by armed groups that fought for access to this exact mine.
      </Paragraph>

      <Paragraph>
        The gold that is extracted will end up on the world market in the form
        of jewelry, locked up in a bank or used in electronics, but few people
        will know about its origin. “They work commando style,” the miner
        continues about nightly shootouts in the hills surrounding the village
        where bullets are shot at every visible headlight as a curfew is imposed
        by active gangs. Most of the miners do not want to be named as they fear
        repercussions from armed actors in the region.
      </Paragraph>

      <Paragraph>
        The Venezuelan military also participates in the violence and is often
        involved in mining through associated gangs and its own operations.
        Venezuela’s armed forces received a lot of power during the presidency
        of late Hugo Chávez. Cliver Alcalá Cordones, a Chávez loyalist who
        retired in 2013, was a Major General that held command in the mining
        regions. In a meeting in a hotel lobby in Bogotá, Colombia, he explains
        that Maduro increasingly is handing over functions to the military and
        government sectors that now partake in the “disaster and pillage”.
      </Paragraph>

      <FeaturedText>
        The armed forces’ rush for minerals results in a visible militarization
        of mining areas.
      </FeaturedText>

      <Paragraph>
        A road trip to the south of Venezuela, approaching the illegal gold
        mines of the state, gives the impression that the region is well
        controlled.
        <StoryMedia
          media={{
            id: "video-2",
            type: "youtube",
            data: {
              id: "mmdFX5EyunU"
            }
          }}
        >
          Every 30 minutes of driving on main roads are interrupted by armed
          National Guard checkpoints
        </StoryMedia>, the only ones charged with internal public order, but
        when approaching the mines it is the military that runs the show.
      </Paragraph>

      <Paragraph>
        It does not really matter if the gold has a legal or an illegal origin,
        whether it is mined by companies or gang controlled mines. Four areas in
        Bolívar state,{" "}
        <FileLink
          href={require("documents/GacetaOficial_40855.pdf")}
          format="pdf"
          size="13.3MB"
        >
          decreed in 2016
        </FileLink>{" "}
        as an immense mining zone and branded the{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-1",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/en/embed/?map_only=1&map_id=17448"
            }
          }}
        >
          Arco Minero del Orinoco
        </StoryMedia>{" "}
        (spanish for “Orinoco Mining Arc”), represent a dark symbiosis of both
        worlds.
      </Paragraph>

      <Paragraph>
        What does matter is the impact that the Arco Minero creates. The four
        areas overlap many legally-protected environmental and indigenous
        territories, which likely will dictate their future destruction. Miners
        risk their health and lives as working conditions are unsafe and mining
        areas violently disputed. Damage to the environment is inconsequential
        for the enclaves of subsistence miners and the brutal forces that
        control them, but moreover, is not a factor for the government that
        created a legal framework around digging it all up.
      </Paragraph>

      <Paragraph>
        Alexander Luzardo, a former senator holding a doctorate in political and
        environmental law, has been personally involved in Venezuela’s
        environmental legislation. He wrote the environmental standards for the
        current constitution in place since 1999. With these standards he
        underlined the significance for Venezuela to protect{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-2",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/en/embed/?map_only=1&map_id=17467"
            }
          }}
        >
          environmentally important regions
        </StoryMedia>. However, in 2016, he saw his decrees violated by the Arco
        Minero. “The Arco Minero is illegal. It denies the existence and
        creation of protected areas by decree,” Luzardo says in an interview in
        a small coffee shop on the campus of the Central University of Venezuela
        (UCV), in Caracas, where he currently teaches.
      </Paragraph>

      <Quote author="Alexander Luzardo, former senator">
        This is the easiest road for environmental destruction in Venezuela, the
        big contribution from Venezuela to the destruction of the planet
      </Quote>

      <Paragraph>
        The professor has a very grim prediction for the country. “This is the
        easiest road for environmental destruction in Venezuela. The big
        contribution from Venezuela to the destruction of the planet,” Luzardo
        says. The professor adds that Venezuela had made some impressive
        progress in terms of environmental protection and fears that the Arco
        Minero will undo it all: “This project is the worst answer to the crisis
        and the denial of the whole environmental project.”
      </Paragraph>

      <Paragraph>
        There is not much known about mining in the country that has built its
        complete economy on its nationalized oil industry. Now they are tapping
        into another finite resource, because Venezuela not only possesses the
        world's largest oil supplies, the government actually claims to have the
        second biggest gold reserve too. If Venezuela is able to certify the
        deposits, it would undoubtedly be welcome news during the country’s
        darkest hour.
      </Paragraph>

      <Paragraph>
        The country finds itself in a financial and political turmoil since a
        few years already, but current levels of hyperinflation and shortages in
        basic products are driving the economy to rock bottom. The government
        needs sounding solutions, hence the announcement that a significant part
        of the country will be opened for a new motor of economic development:
        mining.
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/XrFhX/3/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        The billions of dollars generated by oil and gas exploitations financed
        late President Chávez’s social programs from 1999 until his death in
        2013. Unfortunately these revenues dried up after structural{" "}
        <ExternalLink
          href="https://www.nytimes.com/2017/05/06/world/americas/venezuela-unrest-protests.html"
          language="en"
        >
          self-enrichment by the country's elites
        </ExternalLink>{" "}
        and declining oil prices after 2014.
      </Paragraph>

      <FeaturedText>
        In a last ditch attempt to inject the broken economy with foreign
        capital, President Maduro opened up twelve percent of the national
        territory to future large-scale mining operations.
      </FeaturedText>

      {/* PHOTO: Indigenous people, rivers, environment */}

      <Paragraph>
        “It is a desperate move by the Maduro government to raise cash,” says
        David Smilde, sociology professor at Tulane University and Senior Fellow
        at the Washington Office on Latin America. “There is a very real danger
        that it will lead to ecologically destructive mining operations in a
        territory with{" "}
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-11.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-12.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-14.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-15.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-16.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-18.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-25.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-28.jpg")
                },
                {
                  src: require("photos/sociobiodiversidade/Paraguaza-31.jpg")
                }
              ]
            }
          }}
        >
          incredible biodiversity and protected indigenous populations
        </StoryMedia>.” He is convinced that Venezuela will destroy an important
        resource, in terms of watersheds and potential tourism, for short term
        gains.
      </Paragraph>

      <Quote author="David Smilde, sociology professor">
        Venezuela’s current problems have less to do with the decline of the oil
        price and more to do with unsustainable economic policies
      </Quote>

      <Paragraph>
        Economies that are merely based on what is hidden in the ground do not
        necessarily mean trouble, financially speaking. “I actually have a
        somewhat different view from many scholars and think a rentier economy
        is not the basic problem, bad policies are,” says Smilde. “I think
        Venezuela’s current problems have less to do with the decline of the oil
        price and more to do with unsustainable economic policies. Remember that
        the{" "}
        <ExternalLink
          href="http://www.bbc.com/news/world-latin-america-26335287"
          language="en"
        >
          2014 cycle of protest
        </ExternalLink>{" "}
        was in part motivated by scarcities, inflation and unemployment, and
        that oil was almost $100 a barrel. The model was already unsustainable,
        the drop in oil prices has just hastened its decline.”
      </Paragraph>

      <FullBlock withMargin>
        <iframe
          width="100%"
          height="300"
          src="https://datawrapper.dwcdn.net/p05MX/2/"
          allowFullScreen
          frameBorder="0"
        />
      </FullBlock>

      <Paragraph>
        While international creditors desperately try to get their money back
        from Venezuela, which is on the verge of a default, there is somebody
        who is happy with the Arco Minero. It’s President Maduro. With a curious
        smile under his characteristic moustache, he shows a gold ingot to the
        Venezuelan press. The gold belongs to one of the first batches coming
        from the Arco Minero,{" "}
        <StoryMedia
          icon="map"
          media={{
            id: "map-3",
            type: "embed",
            data: {
              src: "https://infoamazonia.org/en/embed/?map_only=1&map_id=17449"
            }
          }}
        >
          an area of not less than 112 thousand square kilometers bordering the
          southern side of the Orinoco River
        </StoryMedia>, the main water source of Venezuela and the third most
        important in Latin America.
      </Paragraph>

      <FullBlock withMargin>
        <blockquote className="twitter-tweet" data-lang="en">
          <p lang="es" dir="ltr">
            Presidente{" "}
            <a href="https://twitter.com/NicolasMaduro?ref_src=twsrc%5Etfw">
              @NicolasMaduro
            </a>: “Venezuela será la primera o segunda reserva mundial de oro”{" "}
            <a href="https://twitter.com/hashtag/ProduciendoVenceremos?src=hash&amp;ref_src=twsrc%5Etfw">
              #ProduciendoVenceremos
            </a>{" "}
            <a href="https://t.co/xiPZNXSLPE">pic.twitter.com/xiPZNXSLPE</a>
          </p>&mdash; Prensa Presidencial (@PresidencialVen){" "}
          <a href="https://twitter.com/PresidencialVen/status/803362045974421509?ref_src=twsrc%5Etfw">
            November 28, 2016
          </a>
        </blockquote>
      </FullBlock>

      {/* START MAP: Arco Minero limits and to certify areas
      TWITTER EMBED: https://twitter.com/PresidencialVen/status/803362045974421509/ */}

      <Paragraph>
        In August 2016 Maduro officially announced: “<ExternalLink
          href="http://globovision.com/article/ministerios-presentaran-a-maduro-el-plan-de-inversiones-del-arco-minero"
          language="es"
        >
          The Arco Minero is now a reality
        </ExternalLink>”. According to the government, 150 companies from 35
        countries were willing to invest in mining, but after the big
        announcement, concrete mining projects remain absent.
      </Paragraph>

      <Paragraph>
        There were a lot of press junkets and even a new Mining Ministry was
        created. A joint venture with Endiama, an Angolan public mining company
        was{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-firma-acuerdo-con-empresa-de-diamantes-de-Angola-20170720-0055.html"
          language="es"
        >
          signed to mine diamonds
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/empresas-palestinas-y-autoridades-mineras-revisaron-acuerdos-para-explotacion-de-coltan/"
          language="es"
        >
          hands were shaken with the Palestinian ambassador
        </ExternalLink>, who put forward two Palestinian corporations that want
        to mine for coltan. The usual allies,{" "}
        <ExternalLink
          href="https://www.telesurtv.net/news/Venezuela-y-China-firman-acuerdo-para-actividades-mineras-20170721-0060.html"
          language="es"
        >
          China
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink
          href="http://desarrollominero.gob.ve/2017/venezuela-establecio-con-rusia-lineas-de-investigacion-e-inversion-mineras/"
          language="es"
        >
          Russia
        </ExternalLink>, want a piece of Venezuela’s cake of minerals on their
        plate, mainly for debt management with both countries that facilitated
        loans. In total, Venezuela has a $150bn debt to pay to a large queue of
        creditors.
      </Paragraph>

      <Paragraph>
        Venezuela’s cake of minerals on their plate, mainly for debt management
        with both countries that facilitated loans. In total, Venezuela has a
        $150bn debt to pay to a large queue of creditors.
      </Paragraph>

      <FeaturedText>
        Until this day, recognized companies in the mining sector remain absent
        in Venezuela.
      </FeaturedText>

      <Paragraph>
        The world’s biggest gold mining company Barrick Gold responded to our
        enquiry, explaining that: “While Barrick did participate in a review of
        mining projects in the country, the company is not pursuing any projects
        or investments in Venezuela.” Maduro, however, claimed to have{" "}
        <ExternalLink
          href="https://www.reuters.com/article/us-venezuela-mining/venezuela-says-signs-5-5-bln-mining-deals-with-companies-idUSKCN1112BR"
          language="en"
        >
          signed a contract with Barrick Gold
        </ExternalLink>{" "}
        in August 2016.
      </Paragraph>

      <Paragraph>
        More than a year after Maduro’s announcements, it remains a taboo to
        talk about who really controls mining in the crisis-ridden country.
        “Behind mining in Venezuela, there has always been the opacity of
        military factors”,{" "}
        <StoryMedia
          media={{
            id: "video-3",
            type: "youtube",
            data: {
              id: "NQyPITnr8QE"
            }
          }}
        >
          says Américo de Grazia
        </StoryMedia>, who belongs to the political opposition and is a deputy
        in the government-sidelined parliament. De Grazia represents the state
        where most of the gold reserves are hidden, Bolívar. “[Illegal] mining
        has been criminalized for the public opinion, but their own
        clandestinity is allowed. Here the maximum operator [the ones in charge]
        are the public forces, and the practical operator [the executor] is
        organized crime,” he says.
      </Paragraph>

      <Paragraph>
        Venezuela counts with an astonishing{" "}
        <ExternalLink
          href="https://www.nytimes.com/2017/08/08/world/americas/nicolas-maduro-venezuela-military.html"
          language="en"
        >
          number of generals, at about two thousand
        </ExternalLink>, and the armed forces rule the Arco Minero, which is
        underlined by De Grazia and Luzardo who argue that most of the sector is
        dominated by the military. They extort the gangs that operate the
        illegal mines and control export routes. Mining is a cash machine that
        slowly becomes institutionalized. Last year, the Anonymous Military
        Company of Mining, Petroleum and Gas Industries (Camimpeg){" "}
        <ExternalLink
          href="http://efectococuyo.com/economia/fanb-firme-con-la-logistica-de-seguridad-en-el-arcominero"
          language="es"
        >
          was created alongside a Military Economic Zone
        </ExternalLink>. Active or pensioned{" "}
        <ExternalLink
          href="https://transparencia.org.ve/project/informe-general-2016-2017/"
          language="es"
        >
          militares are present in about 30 per cent of the state companies
        </ExternalLink>{" "}
        with known boards of directors. Knowing that the Arco Minero will be
        exploited by joint ventures in which state companies will have a
        majority share, it is very likely the military remain in charge.
      </Paragraph>

      <Paragraph>
        De Grazia says that generals are frequently changed, as are military
        personnel on the boards of companies: “Every military that arrives wants
        to be rich overnight, which makes him more cruel, more violent and his
        norms will be more inhuman because he knows that the form to enrich
        himself is this and that he has one or two months, maybe a year to do
        so.”
      </Paragraph>

      <FeaturedText>
        Armed gangs pay the military in order to continue with illegal mining
        operations.
      </FeaturedText>

      <Paragraph>
        “When we destroyed some illegal mining activities, the miners complained
        about it, because they paid the military before,”{" "}
        <StoryMedia
          media={{
            id: "video-4",
            type: "youtube",
            data: {
              id: "aPtRA5nM_ow"
            }
          }}
        >
          says Alcalá, the retired general who held command in the mining
          regions
        </StoryMedia>. The retired general mentions that many planes illegally
        export a majority of Venezuela’s gold to the Caribbean Islands. The
        military is involved: “They get [the plane] off the radar so they do not
        know where it is.”
      </Paragraph>

      <Paragraph>
        Alcalá confirms that the army receives significant benefits from illegal
        mining and the gangs that operate the projects, where violence is
        applied to maintain control. “Since a year, there have been massacres
        executed by the army in some areas because there is gold.”
      </Paragraph>

      <Paragraph>
        In the first ten months of 2017, an analysis of press reports by the
        Observatory of Violence and Crime in Bolívar state, shows that at least
        1,415 people have been murdered in said state, many of them in mining
        areas. An accurate estimate of people killed in clashes between violent
        gangs and shootouts with the army is impossible to obtain, as it is not
        unusual that migrant miners, who are not from the region themselves, end
        up in clandestine graves after being murdered in remote regions.
      </Paragraph>

      <Paragraph>
        Although Venezuela’s uncontrolled mining conflict is nothing new, the{" "}
        <ExternalLink
          language="es"
          href="http://www.correodelcaroni.com/index.php/sucesos/violencia-minera-en-guayana/item/54546-vecinos-de-tumeremo-se-mantienen-asediados-por-control-de-bandas-criminales-y-militarizacion"
        >
          real battle for access to mineral resources
        </ExternalLink>{" "}
        seems just to have begun. Legalised larceny directly impacts Venezuela
        and its border areas, but the global mineral demand and international
        networks of resource traffickers involve many actors abroad. Therefore,
        the damage that is done to one of the most important ecosystems, the
        Amazon, makes the Arco Minero an issue of international interest.
      </Paragraph>
    </Container>
  </article>
);
