* [Introduction](#introduction)
* [Technologies](#technologies)
* [Fonctionnalités](#Fonctionnalités)

## Introduction
Développement d’un Système est une application de Vote qui permet aux citoyens de s’enregistrer aux élections et voter pour leurs candidats préférés, elle permet aussi d’avoir les résultats en temps réels.
La partie backend est développé sur J2ee avec l’utilisation de Spring, le Frontend sur Angular 7 et enfin la gestions des données se fait par le SGBD MySQL sur phpMyAdmin .

	
## Technologies
Project is created with:

* Angular 7
* Spring boot , Spring Security 
* Visual Studio Code - Latest Version
* Java 8+ et JEE
* Phpmyadmin ,MySQL
* Eclipse - Oxygen+ - (Embedded Maven From Eclipse)
	
## Fonctionnalités 
Toutes les pages web se constituent d’un menu (header) que le contenu change en fonction de besoin, aussi un footer fixe contient lien vers le code source de projet 



* Login page :
La Login-page fournis deux services, premier service l’enregistrement en tant qu’un citoyen pour voter, ce service assure aussi que le citoyen n’a pas encore voté ou existé dans la base de données, deuxième service Administratif permet aux Administrateurs de consulter les résultats de vote en temps réel.

![LoginPage](https://user-images.githubusercontent.com/51484343/79808173-4fb29900-836d-11ea-9f45-9eafb2690a56.png)


* Vote Page :
Vote page :  la page permet au citoyen de voter au candidat préféré et présenté dans la List des candidats fourni dans la page, après le vote une page de remerciement s’affiche.


![welcomPage](https://user-images.githubusercontent.com/51484343/79808175-504b2f80-836d-11ea-9aca-ce09be9982d6.png)


* Result Page :
Après avoir vérifier l’email et le Mot de passe, l’administrateur ou le responsable sur les élections peut consulter les résultats en temps réel .


![List-Todo](https://user-images.githubusercontent.com/51484343/79808171-4fb29900-836d-11ea-8f39-0d11e0f80b89.png)
