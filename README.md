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

![Enregistrement](https://user-images.githubusercontent.com/51484343/81627291-203bfd00-93fe-11ea-8d9b-6d86cfab5fb6.png)


* Vote Page :
Vote page :  la page permet au citoyen de voter au candidat préféré et présenté dans la List des candidats fourni dans la page, après le vote une page de remerciement s’affiche.


![VotePage](https://user-images.githubusercontent.com/51484343/81627300-23cf8400-93fe-11ea-9c51-7a37a3fe9237.png)

près le vote une page de remerciement s’affiche.

![merciPage](https://user-images.githubusercontent.com/51484343/81627305-2631de00-93fe-11ea-9172-230f0f5338d1.png)


* Result Page :
Après avoir vérifier l’email et le Mot de passe, l’administrateur ou le responsable sur les élections peut consulter les résultats en temps réel .

![resultpage](https://user-images.githubusercontent.com/51484343/81627307-27630b00-93fe-11ea-9f4f-eb39ba16aa28.png)
