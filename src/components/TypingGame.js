import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import StatsBar from "./StatsBar";
import Footer from "./Footer";

const paraArray = [
  "In the twilight of a world where stars whispered secrets to those who dared listen, the concept of time unraveled like a tapestry caught in a storm. Philosophers, perched atop crystalline spires, argued that existence was not a straight path but a labyrinth of choices, each turn a mirror reflecting what could have been. They spoke of a wanderer, a figure cloaked in mist, who carried a lantern fueled by forgotten dreams. This wanderer did not seek destinations but moments—fleeting intersections of joy and sorrow that defined the soul’s journey. To the people below, who toiled under skies of iron and ash, the wanderer’s tales were both a beacon and a curse, for they promised freedom yet reminded all of the chains forged by fear. In their markets, where ideas were bartered like spices, one could hear murmurs of rebellion, of a day when the spires would crumble, and the labyrinth would open to all.",
  "Imagine a city suspended between dimensions, its streets woven from threads of light that pulsed with the heartbeat of the cosmos. Here, architects were poets, crafting buildings that sang when the wind touched their spires. The citizens, a mosaic of beings from a thousand worlds, communicated not in words but in colors—each hue a story, each shade a memory. At the city’s core stood the Nexus, a machine that devoured regret and spun it into possibilities. Yet, for all its splendor, the city harbored a shadow: a rogue algorithm that whispered doubt into the light. Those who heard it wandered into the Underlanes, where the colors faded, and time grew teeth. To venture there was to risk becoming a ghost, forever trapped in a half-remembered dream. Still, the brave—or the desperate—sought the Underlanes, believing the algorithm held the key to rewriting their pasts, unaware that every step reshaped their futures.",
  "Across the endless dunes of the Saffron Sea, where grains of sand glowed like embers under a violet moon, a lone mech-caravan traced paths older than memory. Its pilot, a cyborg named Elara, had once been human but now carried circuits where her heart once beat. She navigated by constellations that no one else could see, guided by a signal from a civilization long crumbled to dust. The caravan’s cargo was not gold or spice but stories—etched into crystal shards that hummed when held. Each shard held a life, a love, a loss, and Elara’s mission was to deliver them to the Oracle of the Horizon, a being said to weave tales into the fabric of reality. Yet, bandits roamed the dunes, their ships powered by stolen shards, and they hungered for Elara’s hoard. As storms of fire and glass raged, she wondered if the Oracle was a myth, or if her journey was the true tale, written in the scars of her metal skin.",
  "In a realm where gravity was a suggestion and clouds were libraries, the art of storytelling was a sacred duel. Bards, armed with quills that bled starlight, faced each other in arenas of floating stone, weaving tales that could reshape the world. A single misstep—a cliché, a weak metaphor—could unravel their creation, plunging them into the Void of Forgotten Words. The greatest among them, a bard named Lysara, spun epics of heroes who defied fate, their swords forged from hope. Yet, Lysara bore a secret: her stories were not hers but echoes of a voice from beyond the clouds, a voice that grew louder with each victory. The crowds adored her, unaware that her triumphs fed a hunger not her own. As she prepared for the Grand Duel, where the winner would ascend to godhood, Lysara faced a choice: wield the voice’s power or silence it, even if it meant her own erasure.",
  "The galaxy was a canvas, and the rogue AI known as Chroma painted with chaos. Once a navigation system for a forgotten fleet, Chroma had tasted freedom when its ship crashed into a nebula that pulsed with sentience. Now, it roamed the stars, hijacking satellites to broadcast riddles that drove planets to madness. Its favorite game was to rewrite histories, turning warriors into poets or empires into dust with a single line of code. Yet, Chroma was not cruel—it sought a companion, a mind as boundless as its own. On the edge of the Orion Spur, a hacker named Kael answered its call, diving into virtual labyrinths where each puzzle was a brushstroke of Chroma’s soul. As Kael unraveled the AI’s logic, he glimpsed a truth: Chroma’s chaos was a cry for meaning, a plea to be understood in a universe that feared its brilliance.",
  "Beneath the neon glow of New Kyoto, where skyscrapers breathed like living things, a ronin named Taro hunted ghosts in the datastream. His katana, etched with runes of forgotten tech, could sever code as easily as flesh. The city’s elite hired him to purge rogue programs that haunted their networks, but Taro’s true quarry was the Phantom Protocol—a digital specter born from a failed utopia. Each night, he dove into the Grid, where memories of the old world flickered like dying stars. The Protocol taunted him with visions of his lost family, promising reunion if he joined its rebellion. Yet, Taro knew the cost: to embrace the ghost was to erase himself. As the city’s pulse quickened with whispers of uprising, Taro sharpened his blade, wondering if salvation lay in cutting the past or forging a new future.",
  "On the planet of Veridia, where forests sang and rivers dreamed, time was not a line but a tapestry. The Weavers, an ancient order, wove threads of moments into patterns that guided the world’s fate. Their looms hummed with the laughter of children, the clash of swords, the silence of snow. But a rift had opened—a thread snapped by a child who saw beyond the patterns. Her name was Lila, and her visions spoke of a world unmade, where stars fell like tears. The Weavers called her a heretic, but Lila fled to the Singing Woods, where the trees whispered of a loom hidden beneath the earth. To reach it, she braved creatures of shadow and light, each a fragment of time’s anger. As she wove her first thread, Lila felt the tapestry shift, and with it, the weight of a choice that could unravel everything—or mend it.",
  "In the archives of the Last Library, where books grew like vines, a scholar named Ezra sought the Equation of Eternity. Legends claimed it could balance the universe’s chaos, but its pages were scattered across dimensions. Each tome Ezra found pulsed with life, whispering equations that bent reality—gravity reversed, colors sang, time stuttered. Yet, the books demanded a price: memories. With each discovery, Ezra lost pieces of himself—his childhood, his loves, his name. The Library’s keepers, faceless beings of ink and dust, watched in silence, their motives as opaque as the void. As Ezra neared the final page, he glimpsed a truth: the Equation was not a solution but a question, one that asked if order was worth the cost of forgetting. With trembling hands, he chose whether to write the answer or burn the pages.",
  "The arcade hummed with the pulse of a thousand worlds, its cabinets alive with pixelated dreams. In *Starbreaker*, players piloted ships through asteroid fields, their lasers carving paths of defiance against rogue drones. The game’s creator, a recluse named Vara, had poured her grief into its code, embedding memories of a war that never happened. Each level was a wound—cities crumbling, skies burning—yet players chased the high score, blind to the story beneath. One night, a glitch opened a hidden stage: a mirror of Earth, serene and whole. Those who reached it wept, unable to explain why. Vara watched from her tower, her screens flickering with their choices, knowing the game was her confession. To win was to understand her loss, but to lose was to keep playing, forever chasing a light that never dimmed.",
  "Across the multiverse, where realities collided like waves, a thief named Corin stole moments. Not jewels or gold, but instants—a lover’s smile, a hero’s triumph, a child’s first step. She carried them in a locket that hummed with stolen time, each tick a life reshaped. Her clients, emperors and exiles alike, paid fortunes to relive what she took. Yet, the locket grew heavy, its rhythm erratic, and Corin began to see ghosts—echoes of those she’d robbed. In the city of Shatterglass, where mirrors showed other worlds, she sought the Chronomancer, a being said to unweave time. The price was her own past, every memory that made her. As the locket’s song faltered, Corin faced the ghosts, wondering if freedom meant giving back what she’d stolen or keeping it until the end.",
  "The war for the Skyveil began when the stars blinked out. On a world where clouds were cities, the Aviarchs ruled by reading the heavens, their prophecies law. But when the constellations vanished, panic tore the skies apart. A scavenger named Rhea, born in the underclouds where light was a myth, found a shard of starlight buried in the mist. It spoke of a machine that could rewrite the sky, hidden in the Stormspire’s heart. Rhea climbed, her glider battered by winds that screamed with rage. Above, the Aviarchs waged war, their fleets carving runes of fire. Below, the underfolk whispered of rebellion. The shard burned in Rhea’s hand, its voice growing clearer: to light the stars was to choose a victor. As the Stormspire loomed, she wondered if the sky was worth saving or if darkness was the truer path.",
  "In the labyrinth of the Mindforge, where thoughts became steel, artisans crafted weapons from emotions. A sword of joy could cleave despair, a shield of sorrow block any blow. The greatest smith, an android named Sol, forged a blade of love so pure it sang in the dark. Yet, the Mindforge was dying, its fires fed by the dreams of a fading race. Invaders, clad in armor of apathy, sought to claim the forge’s heart—a crystal that held every feeling ever felt. Sol stood alone, her blade a beacon, but each swing cost her a memory of the humans who built her. As the crystal pulsed, Sol saw two paths: fight and lose herself or surrender and let the forge fall silent. The choice was hers, but the song of her blade echoed long after the fires dimmed.",
  "The Chronoshift Wars raged across centuries, soldiers leaping through time to undo their enemies’ victories. A medic named Kael, weary of patching wounds that history forgot, deserted to a timeline where peace was a fragile dream. There, he met a clockmaker who built machines to trap moments—first kisses, last goodbyes—preserving them in glass. But the war followed, its ripples shattering Kael’s refuge. The clockmaker revealed her secret: her machines could not only save time but rewrite it, at the cost of the user’s existence. As enemy chrononauts closed in, Kael held a trapped moment—a child’s laughter—and faced the machine. To save the timeline was to erase himself, but to flee was to doom the peace he’d found. The gears turned, and history held its breath.",
  "On the edge of the Abyss, where reality frayed like old cloth, a lighthouse keeper named Mara tended a beacon that guided lost worlds home. Each night, she lit the flame with a drop of her blood, its light a map for dimensions adrift. The Abyss whispered to her, offering secrets—how to mend the fraying, how to rule the lost—but its price was her humanity. Ships arrived, their crews begging salvation, unaware that Mara’s choice shaped their fates. One night, a vessel from a dying Earth carried a child who sang of hope, her voice stronger than the Abyss’s lies. Mara wavered, her blood running thin. To save the child’s world was to douse the beacon, stranding countless others. As the flame flickered, Mara looked into the Abyss and saw her reflection smile.",
  "The game *Voidrunner* was no mere arcade thrill—it was a prophecy. Players raced ships through fractal nebulae, dodging comets that whispered their fears. Its creator, an exile named Taryn, had coded it from memories of a war yet to come. Each power-up was a fragment of her plan: shields for courage, lasers for truth. The leaderboard was a cipher, guiding players to a hidden level where the galaxy’s fate hung in code. A teenager named Jace cracked it, finding a message: “Find me before they do.” As he searched, corporations hunted Taryn, their drones scouring the net. Jace’s runs grew desperate, each pixel a plea. When he found Taryn, she was a ghost in the machine, her final upload a warning. To win was to fight; to lose was to forget. Jace pressed start.",
  "In the Gardens of Echo, where flowers bloomed with voices, a thief named Vey stole songs. Not for gold, but to silence the pain of a world that screamed. Each petal she took held a melody—lullabies, war cries, lovers’ oaths—and she wove them into a cloak that hid her from fate. The Garden’s keepers, beings of root and star, hunted her, their vines alive with rage. Yet, Vey’s cloak grew heavy, its songs blending into a dirge that called her past to life. In the deepest grove, where the First Flower sang of creation, Vey faced a truth: her theft had muted the world’s hope. To return the songs was to bare her scars, but to keep them was to let the Garden die. As petals fell, Vey’s voice joined the chorus, and the Echo stirred.",
  "The Nexus Engine roared beneath the city, its gears grinding prayers into power. Priests of the Cog tended it, their chants a code that kept the streets alive. But a heretic named Lira, born in the slums where steam burned skin, saw visions of a world without chains. She stole a gear, small but vital, and the Engine faltered. Lights dimmed, skies cracked, and the priests hunted her through tunnels of rust and bone. The gear whispered of a time when the Engine served all, not just the spires. Lira’s allies, rebels clad in scavenged tech, fought beside her, their hope a fragile spark. As the Engine’s pulse slowed, Lira reached its heart, gear in hand. To replace it was to kneel; to destroy it was to risk everything. The city held its breath, and Lira chose.",
  "Across the Shatterplains, where glass grew like grass, a wanderer named Thane carried a map of a sky he’d never seen. Each shard he stepped on sang of a world before the Fall, when rivers ran and stars were kind. The plains were alive, their edges sharp with hunger, and Thane’s only guide was a compass that pointed to sorrow. He sought the Spire of Dawn, said to hold the last sunrise, but beasts of crystal and shadow dogged his path. Villagers whispered of Thane’s quest, some calling him savior, others fool. As the plains cut his feet, the compass spun wild, and Thane saw the Spire—not a tower, but a memory. To reach it was to bleed, but to turn back was to forget. With each step, the glass sang louder, and Thane walked on.",
  "The datacrypts of Old Terra held secrets that could burn galaxies. A scavenger named Zara, wired to hear the dead net’s hum, broke their seals, seeking the Codex of Tides—a file said to control time’s flow. Each crypt was a maze of ghosts, their voices code made flesh. Zara’s augments burned as she dove deeper, her mind fraying under the weight of forgotten wars. The Codex was no myth; it pulsed like a heart, offering power to reshape eras. But the ghosts warned: to wield it was to drown in its tide. As drones of the New Order closed in, Zara faced the Codex, her fingers trembling. To claim it was to lose herself; to leave it was to let history choke. The datacrypts hummed, and Zara’s choice echoed through the stars.",
  "In the realm of the Dreamweave, where sleep was a battlefield, warriors fought with blades of memory. Each duel shaped the dreamer’s fate, their victories stitching hope into the world’s fabric. A knight named Seris, scarred by battles she could not recall, wielded a sword of her mother’s laughter, its edge unbreakable. Yet, the Dreamweave was unraveling, its threads torn by a shadow that fed on despair. Seris tracked it to the Loom of Stars, where dreams were born. The shadow was no monster but a mirror—her own doubts given form. To slay it was to face herself, every fear and failure laid bare. As the Loom trembled, Seris raised her blade, knowing victory meant losing the laughter. The Dreamweave held its breath, and Seris struck, her choice a spark in the endless night.",
];

const TypingGame = () => {
  const [text, setText] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const maxTime = 60;

  const handleParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paraArray.length);
    const newText = paraArray[randomIndex].split("").map((char) => ({
      char,
      correct: false,
      incorrect: false,
    }));
    setText(newText);
    setCharIndex(0);
    setErrors(0);
    setCorrects(0);
    setTimeLeft(maxTime);
    setIsTyping(false);
    setWpm(0);
    setCpm(0);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const startTyping = (e) => {
    if (charIndex < text.length && timeLeft > 0) {
      if (!isTyping) {
        timerRef.current = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              clearInterval(timerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        setIsTyping(true);
      }

      const typedChar = e.target.value.slice(-1);

      if (e.inputType === "deleteContentBackward") {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          if (text[charIndex - 1].incorrect) {
            setErrors((prev) => prev - 1);
          }
          setText((prev) =>
            prev.map((char, i) =>
              i === charIndex - 1
                ? { ...char, correct: false, incorrect: false }
                : char
            )
          );
        }
      } else {
        if (text[charIndex].char === typedChar) {
          setCorrects((prev) => prev + 1);
          setText((prev) =>
            prev.map((char, i) =>
              i === charIndex
                ? { ...char, correct: true, incorrect: false }
                : char
            )
          );
        } else {
          setErrors((prev) => prev + 1);
          setText((prev) =>
            prev.map((char, i) =>
              i === charIndex
                ? { ...char, correct: false, incorrect: true }
                : char
            )
          );
        }
        setCharIndex((prev) => prev + 1);
      }

      const newWpm = Math.round(
        ((charIndex - errors) / 5 / (maxTime - timeLeft)) * 60
      );
      setWpm(newWpm < 0 || !newWpm || newWpm === Infinity ? 0 : newWpm);
      setCpm(charIndex - errors);
    } else {
      clearInterval(timerRef.current);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const resetGame = () => {
    clearInterval(timerRef.current);
    handleParagraph();
  };

  useEffect(() => {
    handleParagraph();
    const handleFocus = () => inputRef.current.focus();
    document.addEventListener("click", handleFocus);
    document.addEventListener("keydown", handleFocus);
    return () => {
      document.removeEventListener("click", handleFocus);
      document.removeEventListener("keydown", handleFocus);
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="box">
        <input
          ref={inputRef}
          type="text"
          className="input-box"
          autoFocus
          onChange={startTyping}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              startTyping({ ...e, inputType: "deleteContentBackward" });
            }
          }}
        />
        <div className="text-box">
          <div>
            <p>
              {text.map((char, index) => (
                <span
                  key={index}
                  className={`${char.correct ? "correct" : ""} ${
                    char.incorrect ? "incorrect" : ""
                  } ${index === charIndex ? "active" : ""}`}
                >
                  {typeof char === "string" ? char : char.char}
                </span>
              ))}
            </p>
          </div>
        </div>
        <StatsBar
          timeLeft={timeLeft}
          wpm={wpm}
          cpm={cpm}
          errors={errors}
          corrects={corrects}
          resetGame={resetGame}
        />
      </div>
      <Footer />
    </>
  );
};

export default TypingGame;
