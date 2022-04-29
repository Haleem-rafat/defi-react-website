import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="max-w-[1240] mx-auto px-4 py-16 bg-black text-white text-center">
      <div>
        <h1 className="py-4">A Growing Protocol Ecosystems</h1>
        <p className="py-4 text-2xl">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AboutCard
            icon={<SiHiveBlockchain size={40} />}
            heading="Reliable, tamper-proof network"
            text="Use decentralization, trusted nodes, premium data, and cryptographic
            proofs to connect highly accurate and available data/APIs to any
            smart contract."
          />
          <AboutCard
            icon={<SiStrapi size={40} />}
            heading="Seamless connection toany API"
            text="Build on a flexible frameworkthat can retrieve data from anyAPI, 
            connect with existingsystems,
            and integrate with anycurrent or future blockchain.."
          />
          <AboutCard
            icon={<SiFsecure size={40} />}
            heading="Proven, ready-made solutions"
            text="Integrate pre-built, time-tested oracle solutions
            that alreadysecure tens of billions in smartcontract value 
            for market-leading decentralized applications."
          />
          <AboutCard
            icon={<VscServerProcess size={40} />}
            heading="Secure off-chain computation"
            text="Use a decentralized network of DeFi Keepernodes toautomate contracts, 
            mitigating risk of manual interventions and centralized servers."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
