import * as Scry from "scryfall-sdk";

export default async function Cards() {

    const card = await Scry.Cards.byName("Farewell");
    console.log(card.name, card.set); // "Chalice of the Void", "a25"
    
    //imageSrc({Scry.Card}) = card.image_uris["normal"]

    // const prints = await card.getPrints();
    //console.log(prints.length); // 7

    /* const MyComponent = ({ imageSrc }: { imageSrc: string | StaticImport | null | undefined }) => {
        return (
          <div>
            {imageSrc && (
              <Image src={imageSrc} alt="Image" width={300} height={200} />
            )}
          </div>
        );
      }; */
        
    if (card.image_uris) {

      return(
          <div className="container">
              <table className="table table-zebra">
                  {/* <Image height={500} width={500} src={card.image_uris} alt={""}></Image> */}
                  <tbody>
                      <tr><td><b>Name</b></td><td>{card.name}</td></tr>
                      <tr><td><b>ID</b></td><td>{card.id}</td></tr>
                      <tr><td><b>Oracle ID</b></td><td>{card.oracle_id}</td></tr>
                      <tr><td><b>Multiverse IDs</b></td><td>{card.multiverse_ids}</td></tr>
                      <tr><td><b>MTGO ID</b></td><td>{card.mtgo_id}</td></tr>
                      <tr><td><b>MTGO Foil ID</b></td><td>{card.mtgo_foil_id}</td></tr>
                      <tr><td><b>TCGPlayer ID</b></td><td>{card.tcgplayer_id}</td></tr>
                      <tr><td><b>CardMarket ID</b></td><td>{card.cardmarket_id}</td></tr>
                      <tr><td><b>Language</b></td><td>{card.lang}</td></tr>
                      <tr><td><b>Released</b></td><td>{card.released_at}</td></tr>
                      <tr><td><b>URI</b></td><td>{card.uri}</td></tr>
                      <tr><td><b>Scryfall URI</b></td><td>{card.scryfall_uri}</td></tr>
                      <tr><td><b>Layout</b></td><td>{card.layout}</td></tr>
                      <tr><td><b>Highres Img</b></td><td>{card.highres_image}</td></tr>
                      <tr><td><b>Image Status</b></td><td>{card.image_status}</td></tr>
                      <tr><td><b>Image URIs</b></td><td>{JSON.stringify(card.image_uris)}</td></tr>
                      <tr><td><b>Mana Cost</b></td><td>{card.mana_cost}</td></tr>
                      <tr><td><b>CMC</b></td><td>{card.cmc}</td></tr>
                      <tr><td><b>Type Line</b></td><td>{card.type_line}</td></tr>
                      <tr><td><b>Oracle Text</b></td><td>{card.oracle_text}</td></tr>
                      <tr><td><b>Colors</b></td><td>{card.colors}</td></tr>
                      <tr><td><b>Color Identity</b></td><td>{card.color_identity}</td></tr>
                      <tr><td><b>Keywords</b></td><td>{card.keywords}</td></tr>
                      <tr><td><b>Legalities</b></td><td>{JSON.stringify(card.legalities)}</td></tr>
                      <tr><td><b>Games</b></td><td>{card.games}</td></tr>
                      <tr><td><b>Reserved</b></td><td>{card.reserved}</td></tr>
                      <tr><td><b>Finishes</b></td><td>{card.finishes}</td></tr>
                      <tr><td><b>Oversized</b></td><td>{card.oversized}</td></tr>
                      <tr><td><b>Promo</b></td><td>{card.promo}</td></tr>
                      <tr><td><b>Reprint</b></td><td>{card.reprint}</td></tr>
                      <tr><td><b>Variation</b></td><td>{card.variation}</td></tr>
                      <tr><td><b>Set ID</b></td><td>{card.set_id}</td></tr>
                      <tr><td><b>Set</b></td><td>{card.set}</td></tr>
                      <tr><td><b>Set Name</b></td><td>{card.set_name}</td></tr>
                      <tr><td><b>Set Type</b></td><td>{card.set_type}</td></tr>
                      <tr><td><b>Set URI</b></td><td>{card.set_uri}</td></tr>
                      <tr><td><b>Set Search URI</b></td><td>{card.set_search_uri}</td></tr>
                      <tr><td><b>Scryfall Set URI</b></td><td>{card.scryfall_set_uri}</td></tr>
                      <tr><td><b>Rulings URI</b></td><td>{card.rulings_uri}</td></tr>
                      <tr><td><b>Prints Search URI</b></td><td>{card.prints_search_uri}</td></tr>
                      <tr><td><b>Collector Number</b></td><td>{card.collector_number}</td></tr>
                      <tr><td><b>Digital</b></td><td>{card.digital}</td></tr>
                      <tr><td><b>Rarity</b></td><td>{card.rarity}</td></tr>
                      <tr><td><b>Watermark</b></td><td>{card.watermark}</td></tr>
                      <tr><td><b>Card Back ID</b></td><td>{card.card_back_id}</td></tr>
                      <tr><td><b>Artist</b></td><td>{card.artist}</td></tr>
                      <tr><td><b>Artist IDs</b></td><td>{card.artist_ids}</td></tr>
                      <tr><td><b>Illustration ID</b></td><td>{card.illustration_id}</td></tr>
                      <tr><td><b>Border Color</b></td><td>{card.border_color}</td></tr>
                      <tr><td><b>Frame</b></td><td>{card.frame}</td></tr>
                      <tr><td><b>Security Stamp</b></td><td>{card.security_stamp}</td></tr>
                      <tr><td><b>Full Art</b></td><td>{card.full_art}</td></tr>
                      <tr><td><b>Textless</b></td><td>{card.textless}</td></tr>
                      <tr><td><b>Booster</b></td><td>{card.booster}</td></tr>
                      <tr><td><b>Story Spotlight</b></td><td>{card.story_spotlight}</td></tr>
                      <tr><td><b>EDHREC Rank</b></td><td>{card.edhrec_rank}</td></tr>
                      <tr><td><b>Prices</b></td><td>{JSON.stringify(card.prices)}</td></tr>
                      <tr><td><b>Related URIs</b></td><td>{JSON.stringify(card.related_uris)}</td></tr>
                      <tr><td><b>Purchase URIs</b></td><td>{JSON.stringify(card.purchase_uris)}</td></tr>
                      <tr><td><b>Card Faces</b></td><td>{JSON.stringify(card.card_faces)}</td></tr>
                  </tbody>
              </table>
              
          </div>
        ) 
     } else {
       return(
         <div>Card not found or something</div>
       )
     }

}