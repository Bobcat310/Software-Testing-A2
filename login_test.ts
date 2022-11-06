Feature('login');

Scenario('login successful to ', ({ I }) => {
 I.amOnPage('/');
 I.type ('humza123@gmail.com')
 I.fillField ('Password', 'mypass')
 I.click ('Sign In')
 I.see ('Signed in successfully')
});

Scenario('login successful to ', ({ I }) => {
    I.amOnPage('/');
    I.type ('awab1@gmail.com')
    I.fillField ('Password', 'awab.456')
    I.click ('Sign In')
    I.see ('User Not found')
   });
   

   Scenario('login successful to ', ({ I }) => {
    I.amOnPage('/');
    I.type ('humza123@gmail.com')
    I.fillField ('Password', ' ')
    I.click ('Sign In')
    I.see ('Enter Password')
   });
   

   Scenario('login successful to ', ({ I }) => {
    I.amOnPage('/');
    I.type (' ')
    I.fillField ('Password', 'mypass')
    I.click ('Sign In')
    I.see ('Enter email')
   });


   Scenario('login successful to ', ({ I }) => {
    I.amOnPage('/');
    I.type ('humza123@gmail.com')
    I.fillField ('Password', 'mypass123455')
    I.click ('Sign In')
    I.see ('incorrect password')
   });
   
   Scenario('login successful to ', ({ I }) => {
    I.amOnPage('/');
    I.type ('humza123@gmail.com')
    I.fillField ('Password', 'mypass123455')
    I.click ('Sign In')
    I.see ('incorrect password')
   });

