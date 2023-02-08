# Spotter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Autorzy
Filip Glinikowski, Emilia Kwolek, Filip Zyga


W czasach, kiedy życie kulturalne w przestrzeni publicznej tętni swoim własnym życiem, ciężko jest trzymać rękę na pulsie. Komu nie zdarzyło się nigdy przegapić lokalnego wydarzenia, bo dowiedział się o nim za późno? Gdyby informacje o wydarzeniach zgromadzone były w jednym miejscu, nie sprawiałoby to już wielkiej trudności. Z odpowiedzią wychodzi Spotter - aplikacja gromadząca wydarzenia z różnych miejsc - w jednym miejscu.

## Cele projektu
Celem projektu było utworzenie aplikacji pozwalającej na łatwe odnajdywanie lokalnych wydarzeń oraz na łatwe ich rozgłaszanie. Ma za zadanie zbliżyć do siebie twórców i organizatorów przedsięwzięć. 

## Uruchomienie i obsługa
Projekt jest projektem napisanym w technologii Angular, co oznacza że przed jego poprawnym uruchomieniem należy najpierw zainstalować wszystkie zależności.
Instalacja: `npm install`.
Następnie można przejść do uruchomienia projektu komendą: `npm start`
Spowoduje to uruchomienie się projektu lokalnie oraz otwarcie okna przeglądarki z otwrtą stroną `http://localhost:4200/`, zawierającą panel logowania.
Oprócz zwykłego uruchomienia projektu, możliwe jest też uruchomienie testów jednostkowych na jasmine z użyciem biblioteki karma za pomocą: `ng test` oraz uruchominie testów e2e napisanych w cypresie za pomocą `npm run cy:open`

## Użytkownicy
Wszyscy użytkownicy aplikacji posiadają takie same możliwości: mogą przeglądać informacje o wydarzeniach, zamieszczone na tablicy, oraz zamieszczać informacje o własnych wydarzeniach.

## Wydarzenie
Wydarzeniem nazywamy każdy nową wartość dodaną do aplikacji. Użytkownik, w panelu użytkownika, za pośrednictwem łatwego w obsłudze formularza, dodaje informacje o nim. Może zamieścić tytuł, adres, datę, oraz opis wydarzenia. Dodatkowo ma możliwość „przypięcia” wydarzenia pinezką do mapy Google. W ten sposób ułatwi potencjalnym uczestnikom odnalezienie lokalizacji.

## Widoki
Kluczowym założeniem w trakcie projektowania naszej aplikacji było maksymalne uproszczenie UX i UI, aby wyeliminować tak zwaną „barierę wejścia”. Aplikacja miała być czytelna i zaraz po załadowaniu naszego serwisu, użytkownik powinien intuicyjnie potrafić się po nim poruszać. Bazując na tych założeniach, nasza aplikacja opiera się na 2 kluczowych stronach.

### Widok listy wydarzeń
Główna strona  eventów, która składa się z listy wydarzeń  wyświetlonej w formie czytelnych “kafelków”, na których znajdują się najważniejsze informacje na temat wydarzenia. Każdy kafelek zawiera takie pola jak: nazwa wydarzenia, opis, datę. Po kliknięciu w wybrany kafelek wyświetlane są dodatkowe szczegóły na temat wydarzenia tj. adres, miasto. Pod listą wydarzeń znajduje się mapa, na której użytkownik może podejrzeć, gdzie znajduje się interesujące go wydarzenie. Interakcja również może odbywać się za pośrednictwem mapy. Na mapie znajdują się wydarzenia w formie “pinezek” po kliknięciu w pinezkę wyświetlane są szczegóły tego wydarzenia. 

### Panel użytkownika
Do panelu użytkownika mają dostęp tylko zalogowani użytkownicy. Przechodząc do zakładki “User Panel”, użytkownik może podejrzeć utworzone przez siebie wydarzenia. W łatwy sposób może usunąć, dodać nowe lub zaktualizować wydarzenie. Użytkownik ma dostęp do mapy, na której również może modyfikować położenie “pinezki” symbolizującej wybrane wydarzenie.

## Wykorzystane technologie
Aplikacja jest aplikacją Angularową, napisaną w wersji Angular 14. Z tego powodu została napisana w języku type script. Dodatkowo, w projekcie zostały użyte:
* Bootstrap 5 - frontend
* Firebase - do autentykacji oraz jako baza (backend as a service)
* Jasmine-core i karma - testy jednsotkowe
* Cypress - testy e2e

## Instrukcja obsługi
Nasza aplikacja posiada funkcjonalności, które okazują się proste oraz intuicyjne już dla nowego użytkownika. Całość funkcjonalności można opisać w zaledwie trzech ścieżkach

### Wybór eventu (podgląd szczegółów):
1. Wyboru wydarzenia można dokonać ze względu na jego położenie na mapie lub informacji zawartych na kafelku. 
2. Po  zlokalizowaniu interesującego nas wydarzenia należy najechać na niego myszką, a następnie wcisnąć lewy przycisk myszy.
3. W obszarze pomiędzy listą wydarzeń i mapą zostaną wyświetlone szczegóły wybranego wydarzenia.

### Dodawanie eventu (user panel):
1. W celu skorzystania z panelu użytkownika wymagane jest zalogowanie się do aplikacji. W tym celu należy wybrać przycisk “Authenticate with Google” znajdującego się 2. na stronie głównej. 
3. Po zalogowaniu, na  pasku nawigacji wyświetli się zakładka “User panel”, należy wybrać tę opcję.
4. W celu dodania wydarzenia należy wypełnić formularz znajdujący się na stronie oraz  wybrać lokalizację eventu na mapie (opcjonalnie).
5. Następnie zatwierdzamy nowe wydarzenie za pomocą przycisku “Add”.

### Edycja eventu (user panel):
1. W celu skorzystania z panelu użytkownika wymagane jest zalogowanie się do aplikacji.W tym celu należy wybrać przycisk “Authenticate with Google” znajdującego się na stronie głównej. 
2. Po zalogowaniu, na pasku nawigacji wyświetli się zakładka “User panel”, należy wybrać tą opcję.
3. W celu edytowania wydarzenia należy wybrać wydarzenie do edycji. Wyboru można dokonać poprzez wybranie wydarzenia z listy znajdującej się pod formularzem.
4. Formularz zostanie uzupełniony danymi odnośnie wybranego wydarzenia. Na mapie powinna wyświetlić się wcześniej ustalona lokalizacja eventu (jeżeli została ustawiona).
5. Edycji dokonujemy, dowolnie modyfikując pola w formularzu. W celu zmiany lokalizacji na mapie wystarczy kliknąć w dowolną lokalizację. 
6. Następnie zatwierdzamy edytowane wydarzenie za pomocą przycisku “Save”.

