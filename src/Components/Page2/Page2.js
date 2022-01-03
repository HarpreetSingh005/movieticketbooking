import React from 'react';
import './Page2.css';
import Header from '../../CoreComponents/Header/Header';
import Footer from '../../CoreComponents/Footer/Footer';
import Component from './Component'
import movie_book from '../../images/movie_book.jpg'
import c_83 from './MovieImages/83-c.jpg'
import bell_bottom from './MovieImages/bell-bottom-c.jpg'
import blackwidow from './MovieImages/blackwidow-c.jpg'
import conjuring from './MovieImages/Conjuring.jpg'
import godzilla from './MovieImages/godzilla-c.jpg'
import kgf from './MovieImages/kgf.jpg'
import mortal_combat from './MovieImages/mortal-kombat-c.jpg'
import quietplace from './MovieImages/quietplace-c.jpg'
import radhe from './MovieImages/radhe-c.jpg'
import toofan from './MovieImages/toofan-c.jpg'
import sooryavanshi from './MovieImages/sooryavanshi-c.jpg'
import wonder_woman from './MovieImages/wonder-woman.jpg'
import c_83_back from './MovieImages/83-c.jpg'
import bell_bottom_back from './MovieImages/bell-bottom-back.jpg'
import blackwidow_back from './MovieImages/black-widow-back.jpg'
import conjuring_back from './MovieImages/conjuring-back.jpg'
import godzilla_back from './MovieImages/godzilla-back.jpg'
import kgf_back from './MovieImages/kgf-back.jpg'
import mortal_combat_back from './MovieImages/mortal-kombat-back.jpg'
import quietplace_back from './MovieImages/quiet-place-back.jpg'
import radhe_back from './MovieImages/radhe-back.jpg'
import toofan_back from './MovieImages/toofan-back.jpg'
import sooryavanshi_back from './MovieImages/sooryavanshi-back.jpg'
import wonder_woman_back from './MovieImages/wonder-woman-back.jpg'


const Page2 = (props) => {
    const {city} = props.location.state;
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0, 0.05), rgba(1,1,0, 1)), url(${movie_book})`, backgroundSize:'cover'}}>
            <Header />
            <div className="delhi-heading" >
	            <span style={{color:'rgb(0,100,194)'}}>W</span>elcome <span style={{color:'rgb(0,100,194)'}}>T</span>o <span style={{color:'rgb(0,100,194)'}}>{city}</span>
            </div>
            <div className="pannel bg-light" style={{width: 80+'%', marginBottom: 50+'px'}}>
                <div className="card-columns">
                    <Component 
                    image={wonder_woman} 
                    cover={wonder_woman_back} 
                    name='Wonder Woman 1984' 
                    title='Action, Adventure, Fantasy' 
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg', name:'Gal Gadot', role:'as Wonder Woman/Diana'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/chris-pine-435-24-03-2017-13-51-09.jpg', name:'Chris Pine', role:'as Steve Trevor'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kristen-wiig-9007-24-03-2017-12-36-08.jpg', name:'Kristen Wiig', role:'as Cheetah'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/pedro-pascal-1065016-24-03-2017-17-40-11.jpg', name:'Pedro Pascal', role:'as Max Lord'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/connie-nielsen-7706-15-05-2017-11-42-20.jpg', name:'Connie Nielsen', role:'as Hippolyta'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/robin-wright-22180-24-03-2017-12-31-27.jpg', name:'Robin Wright', role:'as Antiope'}
                        }}
                    duration= '2h 31m'
                    date= '24 Dec, 2020'
                    about= "Set in the 1980s, Wonder Woman`s next big screen adventure finds her facing two all-new foes, Max Lord and The Cheetah, and the unexpected return of a face from her past."
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/E5Pj21yLknQ'},
                               trailer2:{link:'https://www.youtube.com/embed/l2oMn3f_KcE'},
                               trailer3:{link:'https://www.youtube.com/embed/USEeS_EERik'}
                            }}
                    ratings='5.4'
                    tomato='59%'
                    />
                    <Component 
                    image={blackwidow} 
                    cover={blackwidow_back} 
                    name='Black Widow' 
                    title='Action, Adventure, Sci-Fi'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/scarlett-johansson-2067-22-12-2017-09-56-57.jpg', name:'Scarlett Johansson', role:'as Natasha Romanoff/Black Widow'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/david-harbour-27559-09-04-2019-13-26-09.jpg', name:'David Harbour', role:'as Alexei Shostakov/Red Gaurdian'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/florence-pugh-1080099-29-06-2017-00-03-48.jpg', name:'Florence Pugh', role:'as Yelena Belova'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/rachel-weisz-1756-24-03-2017-12-33-04.jpg', name:'Rachel Weisz', role:'as Melina Vostokoff'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/cate-shortland-1084701-25-07-2017-15-27-51.jpg', name:'Cate Shortland', role:'Director'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg', name:'Kevin Feige', role:'Producer'}
                        }}
                    duration= '2h 13m'
                    date= '9 Jul, 2021'
                    about= 'Set after the events of Captain America: Civil War, Natasha Romanoff finds herself returning to her roots and her family before the Avengers, ready to face the past. Together, they confront the Taskmaster - a mercenary recruiting and brainwashing young girls into becoming assassins.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/Fp9pNPdNwjI'},
                               trailer2:{link:'https://www.youtube.com/embed/ybji16u608U'},
                               trailer3:{link:'https://www.youtube.com/embed/RxAtuMu_ph4'}
                            }}
                    ratings='4.8'
                    tomato='5%'
                    />
                    <Component 
                    image={mortal_combat} 
                    cover={mortal_combat_back} 
                    name='Mortal Kombat' 
                    title='Action, Adventure, Fantasy, Sci-Fi'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/lewis-tan-1092770-16-05-2018-12-11-12.jpg', name:'Lewis Tan', role:'as Cole Young'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/jessica-mcnamee-1080668-18-09-2017-04-59-39.jpg', name:'Jessica McNamee', role:'as Sonya Blade'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/josh-lawson-40497-19-04-2021-03-15-33.jpg', name:'Josh Lawson', role:'as Kano'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/tadanobu-asano-22363-24-03-2017-15-58-04.jpg', name:'Tadanobu Asano', role:'as Raiden'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/mehcad-brooks-2012958-19-04-2021-03-17-36.jpg', name:'Mehcad Brooks', role:'as Jax'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ludi-lin-1071437-20-04-2017-10-45-31.jpg', name:'Ludi Lin', role:'as Liu Kang'}
                        }}
                    duration= '1h 51m'
                    date= '23 Apr, 2021'
                    about= 'Mortal Kombat is a mysterious, intergalactic tournament of ancient martial arts and Shaolin Monk Liu Kang, from Earth, gets invited as a competitor.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/NYH2sLid0Zc'},
                               trailer2:{link:'https://www.youtube.com/embed/QJHY4ggYCk4'},
                               trailer3:{link:'https://www.youtube.com/embed/-BQPKD7eozY'}
                            }}
                    ratings='4.0'
                    tomato='10%'
                    />
                    <Component 
                    image={quietplace} 
                    cover={quietplace_back} 
                    name='A Quiet Place II' 
                    title='Horror, Thriller'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/emily-blunt-4134-24-03-2017-12-41-22.jpg', name:'Emily Blunt', role:'Actor'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/john-krasinski-1033-24-03-2017-12-37-14.jpg', name:'John Krasinski', role:'Actor'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/cillian-murphy-455-24-03-2017-12-58-10.jpg', name:'Cillian Murphy', role:'Actor'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/djimon-hounsou-601-24-03-2017-14-02-14.jpg', name:'Djimon Hounsou', role:'Actor'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/millicent-simmonds-1091703-03-04-2018-15-38-46.jpg', name:'Millicent Simmonds', role:'as Regan Abbott'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/noah-jupe-1091701-03-04-2018-15-33-48.jpg', name:'Noah Jupe', role:'as Marcus Abbott'}
                        }}
                     duration= '1h 37m'
                     date= '28 may 2021'
                     about= 'Following the events in the previous film, the Abbott family must learn to survive in the outside world. They soon realise that the creatures that hunt by sound are not the only threat they will have to face.'
                     trailers={{trailer1:{link:'https://www.youtube.com/embed/BpdDN9d9Jio'},
                               trailer2:{link:'https://www.youtube.com/embed/RFyfGEoOGc4'},
                               trailer3:{link:'https://www.youtube.com/embed/PNwzzsYc2xg'}
                            }}
                    ratings='4.5'
                    tomato='2%'
                    />
                    <Component 
                    image={conjuring} 
                    cover={conjuring_back} 
                    name='The Conjuring III' 
                    title='Horror, Thriller'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/patrick-wilson-4422-24-03-2017-12-35-32.jpg', name:'Patrick Wilson', role:'as Ed Warren'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vera-farmiga-3223-21-06-2019-02-25-07.jpg', name:'Vera Farmiga', role:'as Lorraine Warren'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vera-farmiga-3223-21-06-2019-02-25-07.jpg', name:'Sterling Jerins', role:'as Judy Warren'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/michael-chaves-1096334-15-04-2019-02-18-12.jpg', name:'Michael Chaves', role:'Director'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/peter-safran-iein073329-24-03-2017-16-31-24.jpg', name:'Peter Safran', role:'Producer'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/james-wan-36022-24-03-2017-16-04-54.jpg', name:'James Wan', role:'Producer,Writer'}
                        }}
                    duration= '1h 37m'
                    date= '4 Jun, 2021'
                    about= 'Paranormal investigators Ed and Lorraine Warren are faced with one of their most challenging cases when a murder suspect claims to be possessed by a demon.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/bBRAseMeAIU'},
                               trailer2:{link:'https://www.youtube.com/embed/OOaITNgAuWY'},
                               trailer3:{link:'https://www.youtube.com/embed/xpaAdZA5sEs'}
                            }}
                    ratings='4.5'
                    tomato='90%'
                    />
                    <Component 
                    image={sooryavanshi} 
                    cover={sooryavanshi_back} 
                    name='Sooryavanshi' 
                    title='Action, Comedy, Drama'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg', name:'Akshay Kumar', role:''},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/katrina-kaif-1171-12-09-2017-11-20-17.jpg', name:'Katrina Kaif', role:''},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg', name:'Ajay Devgn', role:''},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranveer_singh_19858_26-07-2016_04-59-37.jpg', name:'Ranveer Singh', role:''},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/gulshan-grover-773-24-03-2017-18-02-09.jpg', name:'Gulshan Grover', role:''},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/javed-jaffrey-940-05-05-2017-14-46-02.jpg', name:'Javeed Jaaferi', role:''}
                        }}
                    duration= '2hr 29m'
                    date= '2 April 2021'
                    about= 'Starting off from where Akshay Kumar`s character was introduced in Simmba, Sooryavanshi traces the acts and serious antics of DCP Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/u5r77-OQwa8'},
                               trailer2:{link:'https://www.youtube.com/embed/xU_gFCQ-5Ag'},
                               trailer3:{link:'https://www.youtube.com/embed/VN10KK3O2ds'}
                            }}
                    ratings='3.5'
                    tomato='20%'
                    />
                    <Component 
                    image={kgf} 
                    cover={kgf_back} 
                    name='KGF:2' 
                    title='Action, Drama'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/yasha-2537-18-12-2019-12-44-12.jpg', name:'Yash', role:'as Rocky'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sreenidhi-22732-19-02-2018-09-47-37.jpg', name:'Srinidhi Shetty', role:'as Reena'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjay-dutt-2035-12-09-2017-05-07-10.jpg', name:'Sanjay Dutt', role:'as Adheera'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sanjay-dutt-2035-12-09-2017-05-07-10.jpg', name:'Anant Nag', role:'as Anand Ingalagi'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/achyuth-kumar-19493-06-10-2016-04-07-39.jpg', name:'Achyuth Kumar', role:'as Guru Pandian'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/malavika-avinash-28738-24-03-2017-17-45-05.jpg', name:'Malavika Avinash', role:'as Deepa'}
                        }}
                    duration= '3hr 0m'
                    date= '16 July 2021'
                    about= 'The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their saviour, the government sees him as a threat to law and order; enemies are clamouring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/EfxU3M47jTQ'},
                               trailer2:{link:'https://www.youtube.com/embed/c8qvNVhz-mU'},
                               trailer3:{link:'https://www.youtube.com/embed/Qah9sSIXJqk'}
                            }}
                    ratings='5.0'
                    tomato='0%'
                    />
                    <Component 
                    image={godzilla} 
                    cover={godzilla_back} 
                    name='Godzilla vs Kong' 
                    title='Action, Fantasy, Sci-Fi, Thriller'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg', name:'Alexander Skarsgard', role:'as Nathan Lind'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/millie-bobby-brown-1079885-24-05-2019-05-20-16.jpg', name:'Millie Bobby Brown', role:'as Madison Russell'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/rebecca-hall-7076-11-09-2017-05-49-56.jpg', name:'Rebecca Hall', role:'as Ilene Andrews'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/brian-tyree-henry-1096515-26-10-2018-14-45-47.jpg', name:'Brian Tyree Henry', role:'as Bernie Hayes'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/eiza-gonz_lez-1264796-05-02-2019-11-55-05.jpg', name:'Eiza Gonzalez', role:'as Maya Simmons'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/julian-dennison-1061739-24-03-2017-13-19-43.jpg', name:'Julian Dennison', role:'as Josh Valentine'}
                        }}
                    duration= '1h 53m'
                    date= '24 Mar, 2021'
                    about= 'Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash between them is only the beginning of the mystery that lies within the core of the Earth.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/odM92ap8_c0'},
                               trailer2:{link:'https://www.youtube.com/embed/NrtPhu8lS8w'},
                               trailer3:{link:'https://www.youtube.com/embed/P6HqTjuZPAk'}
                            }}
                    ratings='4.8'
                    tomato='2%'
                    />
                    <Component 
                    image={bell_bottom} 
                    cover={bell_bottom_back} 
                    name='Bell Bottom' 
                    title='Action, Thriller'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-kumar-94-20-12-2017-04-36-47.jpg', name:'Akshay Kumar', role:'Actor'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vaani-kapoor-36695-18-12-2019-01-53-28.jpg', name:'Vaani Kapoor', role:'Actor'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/huma-qureshi-30360-24-03-2017-13-58-06.jpg', name:'Huma Qureshi', role:'Actor'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/lara-dutta-1256-19-09-2017-04-53-26.jpg', name:'Lara Dutta', role:'Actor'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranjit-tiwari-1076875-17-08-2017-12-55-08.jpg', name:'Ranjit Tiwari', role:'Director'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vashu-bhagnani-iein004098-24-03-2017-12-54-16.jpg', name:'Vashu Bhagnani', role:'Producer'}
                        }}
                    duration= '2hr 19m'
                    date= '28 May 2021'
                    about= 'Bell Bottom is a Hindi movie starring Akshay Kumar in a prominent role. It is a thriller directed by Ranjit Tewari.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/RpY7Jq4ltLM'},
                               trailer2:{link:'https://www.youtube.com/embed/3D9g4erlOVE'},
                               trailer3:{link:'https://www.youtube.com/embed/8AKzMnDgRwc'}
                            }}
                    ratings='3.4'
                    tomato='25%'
                    />
                    <Component 
                    image={radhe} 
                    cover={radhe_back} 
                    name='Radhe' 
                    title='Action, Crime, Thriller'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/salman-khan-1991-12-09-2017-01-53-43.jpg', name:'Salman Khan', role:'as Radhe'},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/disha-patani-1061408-30-08-2016-01-45-28.jpg', name:'Disha Patani', role:'as Diya'},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/randeep-hooda-1827-24-03-2017-13-57-50.jpg', name:'Randeep Hooda', role:'as Rana'},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/jackie-shroff-882-19-09-2017-05-13-08.jpg', name:'Jackie Shroff', role:'as Avinash'},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sudhanshu-pandey-2267-24-03-2017-12-50-58.jpg', name:'Sudhanshu Pandey', role:'as Dilawar'},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/farhan-akhtar-671-05-10-2016-11-07-44.jpg', name:'Farhan Akhtar', role:''}
                        }}
                    duration= '1h 54m'
                    date= '13 May, 2021'
                    about= 'Radhe, an encounter specialist of the Mumbai Police, vows to destroy the crime syndicate led by a drug kingpin.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/n5MVzhwupBY'},
                               trailer2:{link:'https://www.youtube.com/embed/8gC3EmD2aag'},
                               trailer3:{link:'https://www.youtube.com/embed/OYt6SQli2Vg'}
                            }}
                    ratings='100%'
                    tomato='0.2'
                    />
                    <Component 
                    image={toofan} 
                    cover={toofan_back} 
                    name='Toofan' 
                    title='Action, Biography, War'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/farhan-akhtar-671-05-10-2016-11-07-44.jpg', name:'Farhan Akhtar', role:''},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/paresh-rawal-1644-13-09-2017-03-44-45.jpg', name:'Paresh Rawal', role:''},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/isha-talwar-14774-24-03-2017-14-08-54.jpg', name:'Isha Talwar', role:''},
                           cast4: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/mrunal-thakur-1044080-18-12-2019-02-06-58.jpg', name:'Marunal Thakur', role:''},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vijay-raaz-2465-04-07-2018-12-40-58.jpg', name:'Vijay Raaz', role:''},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/rajendra-chawla-12039-25-06-2020-01-59-48.jpg', name:'Rajendra Chawla', role:''}
                        }}
                    duration= '2hr 39m'
                    date= '21 May, 2021'
                    about= 'Toofan tells the story of a boxer and the struggles he faces on his journey to get to the national level competition.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/2RJqgz7WHTg'},
                               trailer2:{link:'https://www.youtube.com/embed/FFTnfiRMIC8'},
                               trailer3:{link:'https://www.youtube.com/embed/FFTnfiRMIC8'}
                            }}
                    ratings='4.5'
                    tomato='15%'
                    />
                    <Component 
                    image={c_83} 
                    cover={c_83_back} 
                    name='83' 
                    title='Biography, Drama, Sports'
                    cast={{cast1: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranveer_singh_19858_26-07-2016_04-59-37.jpg', name:'Ranveer Singh', role:''},
                           cast2: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg', name:'Deepika Padukone', role:''},
                           cast3: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/tahir-raj-bhasin-1046814-21-06-2018-01-48-48.jpg', name:'Tahir Raj Bhasin', role:''},
                           cast4: {image:'https://i.scdn.co/image/24fb2b5cc9cb29b3b7f4b606abff0a295ffa99d8', name:'Ammy Virk', role:''},
                           cast5: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/chirag-patil-32631-24-03-2017-14-24-25.jpg', name:'Chirag Patil', role:''},
                           cast6: {image:'https://in.bmscdn.com/iedb/artist/images/website/poster/large/adinath-kothare-19167-24-03-2017-12-31-08.jpg', name:'Addinath M Kothare', role:''}
                        }}  
                    duration= '2hr 35m'
                    date= '4 Jun, 2021'
                    about= '1983 Cricket World Cup taught India to win. 14 men fought against all odds. This is their Story! 83 releasing in Hindi, Tamil and Telugu.'
                    trailers={{trailer1:{link:'https://www.youtube.com/embed/ThKNjV723yI'},
                               trailer2:{link:'https://www.youtube.com/embed/-MYZrPEMxF4'},
                               trailer3:{link:'https://www.youtube.com/embed/wlVAQMB7TDY'}
                            }}
                    ratings='3.9'
                    tomato='10%'
                    />
                </div>
	        </div>
            <Footer />
        </div>
    
  )

}

export default Page2;