import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import './LifeStory.css';

const chapters = [
  {
    number: 1,
    title: 'Born on Janmashtami',
    hindi: 'जन्माष्टमी पर जन्म',
    content: [
      'On the auspicious day of Janmashtami in 1940, Krishna Bhargava was born in the historic city of Bikaner, Rajasthan. Her birth on Lord Krishna\u2019s birthday would prove prophetic, for her life would be filled with the same warmth, creativity, and joy that the divine child brought to the world.',
      'Krishna was the youngest of four siblings\u2014three sisters and one brother\u2014in the distinguished Bhargava family. Her father, Shankarlayal Bhargava, was a respected doctor, and her family held a place of prominence in Bikaner society. As the youngest, Krishna was pampered and cherished, treated like royalty in every sense of the word.',
      'The Bhargava family was no ordinary household. They were well-educated and accomplished, with family photographs displayed in the Bikaner museum to this day\u2014a testament to their contribution to society. Her father and brother both served as doctors, while other family members distinguished themselves in the military. During World War II, Krishna\u2019s uncle served as a commander in the British army, and her mother participated in India\u2019s independence movement as a freedom fighter.',
    ],
  },
  {
    number: 2,
    title: 'A Princess in Bikaner',
    hindi: 'बीकानेर की राजकुमारी',
    content: [
      'Young Krishna\u2019s childhood was nothing short of regal. The family had an Ambassador car\u2014a luxury in those days\u2014and received the kind of treatment befitting nobility. People would bring food to their home as offerings of respect, though this embarrassed the humble young Krishna. Despite the royal treatment, she witnessed her country\u2019s transformation from British rule to independence, growing up during one of the most pivotal periods in Indian history.',
      'Life in Bikaner was comfortable and privileged, yet Krishna was never spoiled by it. She learned early the values of humility and grace, qualities that would define her throughout her life. Her childhood was filled with both privilege and purpose, setting the foundation for the remarkable woman she would become.',
    ],
  },
  {
    number: 3,
    title: 'Education Against the Odds',
    hindi: 'बाधाओं के विरुद्ध शिक्षा',
    content: [
      'In an era when girls were actively discouraged from pursuing education, Krishna defied convention. She attended an all-girls school and went on to achieve something extraordinary\u2014a Master\u2019s degree in Hindi and Sanskrit. This was no small feat in 1940s and 1950s India, where female education was often considered unnecessary or even inappropriate.',
      'Her pursuit of knowledge reflected the progressive values of the Bhargava family. Education wasn\u2019t just about academic achievement; it was about expanding horizons, challenging societal norms, and preparing oneself to make a meaningful contribution to the world. Krishna embraced these opportunities with determination and grace, becoming one of the educated women of her generation.',
    ],
  },
  {
    number: 4,
    title: 'The Athlete',
    hindi: 'खिलाड़ी',
    content: [
      'But Krishna was not merely a scholar. She possessed a competitive spirit and natural athletic ability that set her apart. She became a state-level field hockey player and a table tennis state champion\u2014achievements that were remarkable for any athlete, but especially for a woman of her time.',
      'Her playing style was distinctive and clever. On the field, she would look in one direction while hitting the ball in another, keeping her opponents constantly off-balance. This deceptive technique made her one of the best players of her time. She even received coaching from the legendary Dhyan Chand, one of India\u2019s greatest hockey players, known as \u201cThe Magician\u201d of Indian hockey.',
      'Whether wielding a hockey stick or a table tennis paddle, Krishna played with passion and skill. Her excellence in sports would later translate into her competitive spirit in card games\u2014particularly thash and courtpiece\u2014where she consistently outplayed friends and family, and in badminton, where she beat everyone who dared challenge her.',
    ],
  },
  {
    number: 5,
    title: 'Love and Partnership',
    hindi: 'प्रेम और साझेदारी',
    content: [
      'On May 1st, 1962, Krishna married her life partner. Their wedding was a beautiful celebration, bringing together two families and beginning a journey that would span nearly six decades. The marriage would be blessed with two daughters, Anshu and Aparna (affectionately called Bebu), who would bring immense joy to their lives.',
      'Krishna and her husband were true partners, sharing a love of travel, exploration, and family. They complemented each other perfectly\u2014she with her creative energy and warmth, he with his steady presence and support. Together, they built a life filled with love, laughter, and lasting memories.',
    ],
  },
  {
    number: 6,
    title: 'The Bhopal Years',
    hindi: 'भोपाल के वर्ष',
    content: [
      'The family eventually settled in Bhopal, where Krishna\u2019s husband worked for BHEL (Bharat Heavy Electricals Limited). It was in Bhopal that Krishna truly came into her own, transforming their house into a home that became legendary among family and friends.',
      'Her Bhopal home was a masterpiece of her own creation. She designed the garden layout herself, demonstrating an innate talent for landscaping and design. The garden was her sanctuary, with perfectly manicured lawns, carefully arranged flower beds, and trees that provided shade and beauty. Her flower arrangements were works of art, earning her a reputation as the best interior designer among her circle.',
      'Inside the house, everything had its place. Krishna was a perfectionist who maintained her home with meticulous care. The living room was always immaculate, with elegant furniture adorned with handmade covers and decorative touches. Even their car was kept in pristine condition, reflecting her attention to every detail of their life together.',
      'The house itself became a symbol of Krishna\u2019s personality\u2014warm, welcoming, beautiful, and perfectly maintained. It was a place where family gathered, friends were welcomed, and memories were made.',
    ],
  },
  {
    number: 7,
    title: 'The BHEL Ladies Club',
    hindi: 'भेल लेडीज़ क्लब',
    content: [
      'At the BHEL Ladies Club, Krishna found another outlet for her talents and a community of women who became lifelong friends. She participated actively in club activities and won multiple awards for her various skills and contributions.',
      'These friendships enriched her life immeasurably. The ladies would meet regularly for picnics, outings, and social gatherings. Photographs from those years show Krishna surrounded by friends, always smiling, always engaged. Every Monday became a special day\u2014a tradition of picnics where they would change clothes in the car and head straight to Kerwa Dam for an afternoon of relaxation and companionship.',
      'One memorable trip to Haridwar included a visit to a children\u2019s park with ducks. While stepping from stone to stone across the water, Krishna lost her balance and fell completely in, emerging soaked but laughing. They even attempted to cross Lakshman\u2019s Jhula, adding another adventure to their collection of shared memories.',
    ],
  },
  {
    number: 8,
    title: 'The Art of Hospitality',
    hindi: 'आतिथ्य की कला',
    content: [
      'Krishna\u2019s gift for hospitality was legendary. She was known as the best hostess, capable of throwing spectacular parties that left guests talking for weeks. Her daughters\u2019 birthday celebrations were the highlight of the social calendar, featuring the best cakes, creative decorations, and chaat parties that brought together children and adults alike.',
      'But it was her daily hospitality that truly defined her. Krishna\u2019s table always groaned under the weight of generous spreads. She was famous for her culinary expertise, particularly her innovative use of kitchen tools. She owned one of the first pressure cookers in the community, and friends would come to her home to learn how to use and open it safely.',
      'She was an early adopter of the solar cooker, always interested in new technologies and methods. Her pickles\u2014especially the lachhe ka achaar and katthal ka achaar\u2014were famous throughout the community. Her signature ketchup, paneer ka paratha rolls, cutlets, samosas, bread rolls, and tri-colored sandwiches made with Kissan jam and Amul butter were beloved by all. And her gulab jamuns were considered the finest anyone had ever tasted.',
    ],
  },
  {
    number: 9,
    title: 'The Creative Spirit',
    hindi: 'रचनात्मक आत्मा',
    content: [
      'Krishna\u2019s creativity extended far beyond cooking and gardening. She was an accomplished seamstress who could bring any vision to life with her sewing machine. She stitched amazing dresses for her granddaughter Ankita\u2019s first birthday, created chair seat covers, made sweaters, and produced garments that were both beautiful and perfectly tailored.',
      'Her talent for making people feel welcome was perhaps her greatest gift. She had a rare ability to put anyone at ease, to make them feel like the most important person in the room. She could talk to anyone, finding common ground and genuine interest in every conversation. This warmth and openness made her beloved by all who knew her.',
      'Krishna was also mischievous and fun-loving. As a child, she participated in mango food fights, and that playful spirit never left her. Her \u201cbhootho ki kahani\u201d (ghost stories) were legendary, entertaining generations of children with spine-tingling tales told with perfect dramatic timing.',
    ],
  },
  {
    number: 10,
    title: 'Faith and Philosophy',
    hindi: 'आस्था और दर्शन',
    content: [
      'Every Monday, Krishna visited the mandir, a spiritual practice that anchored her week. She maintained a large mandir in her home, where she could pray and meditate daily. Her faith was deep and personal, expressed through regular devotional practices and through her treatment of others.',
      'She was deeply philosophical, having read extensively from India\u2019s greatest religious and philosophical texts. This study informed her worldview and gave her a perspective that blended traditional values with progressive thinking. She understood the deeper meanings behind rituals and traditions, and she lived her faith through kindness, generosity, and service to others.',
    ],
  },
  {
    number: 11,
    title: 'Adventures Near and Far',
    hindi: 'दूर-दूर तक साहसिक यात्राएँ',
    content: [
      'Krishna and her husband were true explorers, traveling extensively throughout India and abroad. They visited Kodaikanal\u2019s misty mountains, Disney World in the United States, the sacred temple of Vaishnodevi, the modern marvels of Singapore, the hill station of Mussoorie, the holy city of Haridwar, and the thundering Niagara Falls.',
      'Each journey was an adventure, an opportunity to see new places, experience different cultures, and create memories together. They were never content to simply stay home when there was so much world to explore. Their children and grandchildren would later treasure the stories and photographs from these travels, seeing in them the adventurous spirit that defined Krishna\u2019s approach to life.',
    ],
  },
  {
    number: 12,
    title: 'Grandmother Extraordinaire',
    hindi: 'अद्वितीय नानी',
    content: [
      'As grandchildren began to arrive, Krishna embraced her role as Nani with the same energy and creativity she brought to everything else. She was there for the birth of each grandchild, ready with love, wisdom, and those famous dishes that became comfort food for multiple generations.',
      'Summer vacations at Nani\u2019s house were magical. All the children from every branch of the family would gather in Bhopal. Krishna would cook elaborate meals\u2014aloo ki paratha with aamrus was a particular favorite\u2014while the children played games, went swimming at the pool, and created memories they would cherish forever.',
      'She taught the children card games, told them stories, played badminton with them, and made each one feel uniquely special. Christmas celebrations at her home became family traditions, with beautifully decorated trees and carefully chosen gifts for everyone.',
      'Her creativity extended to her grandchildren\u2019s lives in countless ways. She made toys, created elaborate birthday celebrations, and was always ready with a story, a game, or a special treat. The grandchildren could play board games with her for hours, and she would often win with her sharp mind and competitive spirit still intact.',
    ],
  },
  {
    number: 13,
    title: 'The Golden Anniversary',
    hindi: 'स्वर्ण जयंती',
    content: [
      'In 2012, Krishna and her husband celebrated their 50th wedding anniversary\u2014a remarkable milestone that called for an equally remarkable celebration. The event was a grand affair, bringing together family and friends from across the country.',
      'Photographs from that evening show a couple still deeply in love after five decades together. Krishna, dressed elegantly, beamed with happiness as she stood beside her husband, surrounded by their daughters, sons-in-law, and grandchildren. The evening was filled with speeches, laughter, music, and the kind of joy that comes from a life well-lived and love well-maintained.',
      'The celebration was a testament to their enduring partnership, their commitment to family, and the community they had built around them over the years. It was also a celebration of Krishna herself\u2014the woman who had touched so many lives with her kindness, creativity, and generous spirit.',
    ],
  },
  {
    number: 14,
    title: 'The Bhopal Community',
    hindi: 'भोपाल का समुदाय',
    content: [
      'Throughout her years in Bhopal, Krishna was part of a close-knit community of friends who became like family. The \u201cBhopal group\u201d gathered regularly, celebrating festivals together, supporting each other through life\u2019s challenges, and creating a network of relationships that enriched everyone\u2019s lives.',
      'These gatherings were filled with laughter, conversation, and Krishna\u2019s incomparable hospitality. Whether it was a formal dinner party or an informal afternoon tea, Krishna ensured that everyone felt welcome and cared for. Her home was the heart of this community, a place where friendships deepened and memories multiplied.',
      'The photographs from these years show Krishna in her element\u2014surrounded by friends, always smiling, forever the gracious hostess who made everything look effortless even as she worked tirelessly to ensure everyone\u2019s comfort and happiness.',
    ],
  },
  {
    number: 15,
    title: 'A Legacy of Love',
    hindi: 'प्रेम की विरासत',
    content: [
      'Krishna Bhargava\u2019s life was a masterpiece painted in bold strokes of color and joy. She was a pioneer who pursued education when women were discouraged from learning. She was an athlete who competed at the state level when sports were considered unfeminine. She was a creative spirit who transformed everything she touched\u2014from gardens to garments, from recipes to relationships.',
      'But above all, Krishna was defined by her capacity for love. She loved her family fiercely and showed that love in a thousand daily acts of service and care. She loved her friends generously, opening her home and her heart to all. She loved life itself, embracing every opportunity for adventure, creativity, and connection.',
      'Her daughters Anshu and Aparna learned from her example how to be strong women who balance tradition with progress, grace with strength, and ambition with compassion. Her grandchildren\u2014including Ankita, Manan, and others\u2014grew up knowing they were loved unconditionally, that they belonged to something larger than themselves, that they came from a legacy of excellence and service.',
    ],
  },
];

const epilogue = [
  'Krishna Bhargava passed away on December 4th, 2021, at the age of 81. She left behind a family that adored her, friends who treasured her, and a community that was better for having known her. Her home in Bhopal stands as a testament to her taste and care. Her recipes continue to be prepared by daughters and granddaughters who learned at her elbow. Her stories are retold, keeping her voice alive in family gatherings.',
  'But perhaps her greatest legacy is the lesson she taught simply by living: that a life of purpose, creativity, generosity, and love is a life truly worth living. She showed that it\u2019s possible to honor tradition while breaking barriers, to be gracious while being strong, to serve others while maintaining your own identity and dreams.',
  'From her royal childhood in Bikaner to her final days in Bhopal, Krishna Bhargava lived with intention and joy. She was a princess not because of her privileged birth, but because of her regal spirit\u2014generous, creative, welcoming, and warm. She was an athlete who played to win but never forgot that the game was meant to be enjoyed. She was a scholar who never stopped learning. She was a wife who built a partnership of equals. She was a mother who raised strong, accomplished daughters. She was a grandmother who made magic out of ordinary days.',
  'Krishna Bhargava was, quite simply, unforgettable. And those who were blessed to know her will carry her light forward, sharing her stories, following her example, and loving as she loved\u2014completely, generously, and joyfully.',
];

function LifeStoryNav() {
  return (
    <nav className="ls-nav">
      <div className="ls-nav-inner">
        <Link to="/" className="ls-nav-back">&larr; Back</Link>
        <div className="ls-nav-title">
          Her Life Story<span>जीवन कहानी</span>
        </div>
      </div>
    </nav>
  );
}

function LifeStory() {
  const containerRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef}>
      <LifeStoryNav />
      <div className="ls">
        <header className="ls-header fade-in">
          <h1 className="ls-title">Krishna Bhargava</h1>
          <p className="ls-title-hindi">कृष्णा भार्गव</p>
          <p className="ls-subtitle">A Life Well Lived</p>
          <p className="ls-years">September 7, 1940 &ndash; December 4, 2021</p>
        </header>

        {chapters.map((ch) => (
          <section className="ls-chapter fade-in" key={ch.number}>
            <div className="ls-chapter-number">Chapter {ch.number}</div>
            <h2 className="ls-chapter-title">{ch.title}</h2>
            <p className="ls-chapter-title-hindi">{ch.hindi}</p>
            {ch.content.map((para, i) => (
              <p className="ls-para" key={i}>{para}</p>
            ))}
          </section>
        ))}

        <section className="ls-chapter ls-epilogue fade-in">
          <div className="ls-chapter-number">Epilogue</div>
          <h2 className="ls-chapter-title">Remembering Nani</h2>
          <p className="ls-chapter-title-hindi">नानी को याद करते हुए</p>
          {epilogue.map((para, i) => (
            <p className="ls-para" key={i}>{para}</p>
          ))}
          <p className="ls-closing-quote">
            &ldquo;Creative, Welcoming, Warm&rdquo; &mdash; these words only begin to
            capture the essence of a woman who made the world brighter simply by being in it.
          </p>
        </section>

        <div className="ls-footer fade-in">
          <p className="ls-footer-dedication">
            In loving memory of Krishna Bhargava, whose life was a gift to all who knew her.
          </p>
          <p className="ls-footer-hindi">
            कृष्णा भार्गव की प्रेमपूर्ण स्मृति में, जिनका जीवन उनके सभी परिचितों के लिए एक उपहार था।
          </p>
          <p className="ls-om">ॐ शान्ति शान्ति शान्ति</p>
          <Link to="/" className="ls-back-link">
            &larr; Return to Memorial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LifeStory;
