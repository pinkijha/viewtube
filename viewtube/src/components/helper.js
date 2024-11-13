var nameList = [
    "Aarav", "Kshitij", "Shantanu", "Onkar", "Aniket", "Atharva", "Prajwal", "Yash", "Abhijeet", "Ganesh", "Sachin", "Prathamesh", "Vaibhav", "Ninad", "Mihir", "Tejas", "Suyash", "Sanket", "Devang", "Darshan", "Soham", "Rohit", "Manish", "Aadesh", "Siddhesh",
    "Aakash", "Anmol", "Chaitanya", "Dharmesh", "Gagan", "Gaurav", "Gopal", "Ishan", "Mehul", "Om", "Rahul", "Sandesh", "Tanmay", "Tushar", "Utkarsh",
    "Vedang", "Varun", "Vinay", "Vivek", "Yogesh","Vaishnavi", "Maithili", "Pooja", "Smital", "Shivani", "Veerja", "Shruti", "Aditi", "Manali", "Anuja", "Pranali", "Saloni",
    "Aabha", "Aakriti", "Aruni", "Akanksha", "Akshata", "Aboli", "Ankita", "Chaitrali", "Divya", "Dhriti", "Gargi", "Gayatri", "Gauravi", "Gautami", "Isha", "Ishika",
    "Kajal", "Kalyani", "Neha", "Nishi", "Tanvi", "Yuti","jeet", "jyot", "vinder", "preet", "meet", "preet", "jeet", "bir", "Gagan", "Har", "Bal", "Man", "Nav", "Sukh", "Kush", "Gur", "Karam", "Karan", "Dil", "Dharam", "Param", "Dal", "Jas", "Par", "Dul", "Ankolika", "Arundhati", "Bidisha", "Bibhuti", "Bipasha", "Chaitali", "Debjani", "Debolina", "Drishti", "Durba", "Joyeeta", "Kajol", "Kshamya", "Indrani", "Lotika", "Mishti","Naisha", "Pakhi", "Paromita", "Piyali", "Sagarika", "Shorbari", "Shoma", "Sushmita", "Tavishi", "Tvisha", "Yoshita", "Abhik", "Abhoy", "Achintya", "Arnab", "Benoy", "Bhaskor","Bipin", "Daiwik", "Debesh", "Hrishab", "Indroneel", "Palash", "Paritosh", "Shirshendu", "Shubhang",
    "Sourav", "Subrata", "Tapan", "Gairik", "Ujjwal"
];
  export function generateRandomName() {
  return  nameList[Math.floor(Math.random() * nameList.length)];
      };

      export function generateRandomeMessage (){
        const texts = ['hello! Hows You!', 'Hiii', 'Hello! All 👋', 
                        'Hello! Good morning☕', 'Namste🙏', 'Good morning☕', 
                        'Hiiiii👋'];
        return texts[Math.floor(Math.random() * texts.length)];
      }