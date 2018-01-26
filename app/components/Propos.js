import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Propos extends React.Component {

  render() {
    return (

      <View>
              <Text style={styles.bigblue}>A propos</Text>
              <Text style={styles.text}>
              EMMA est une association loi 1901 dont l'objectif est la prévention et la sensibilisation aux risques liés à l'utilisation des applications et sites de rencontre, et à une échelle plus large, mobiliser les esprits sur les problématiques concernant la cyber-rencontre afin de réduire les comportements mal intentionnés et usages à mauvais escient. L'équipe d'EMMA développe une application mobile du même nom, basée sur le principe du cocktail "Angel Shot", visant à couper court discrètement et en toute sécurité à un rencard qui tourne mal.</Text>

<Text style={styles.text2}>Pourquoi EMMA ?</Text>

<Text>
E comme éthique
Concernée et soucieuse des problématiques liées aux incivilités grandissantes, au harcèlement de rue et à la protection des données, EMMA est avant tout une aventure humaine et sociale. Les fondatrices de l’association, touchées par les récits de proches et d’inconnus victimes de comportements néfastes, s’investissent chaque jour personnellement et professionnellement dans l’accompagnement de ces personnes et le changement de paradigme sociétal.

Les institutions et pouvoirs publics, malgré des campagnes chocs et un budget croissant octroyé aux services de protection, n’ont malheureusement pas la portée sensibilisatrice et préventive suffisante pour toucher l’ensemble des publics concernés. EMMA souhaite compléter les actions de ces intervenants de premier ordre, à son échelle, par des activités locales, plus réduites et efficaces, afin d’élever les consciences et dissuader les mauvais comportements.

M, comme mobilisation
Notre objectif n’est pas d’offrir une solution précaire aux utilisateurs et utilisatrices de notre application mobile EMMA, mais bien d’affronter les causes sociétales et sociales à l’origine des problématiques d’incivilité, d’irrespect et de sécurité. Nous croyons en l’humain, et en ce sens, il nous paraît toujours possible de changer les comportements et pensées, dès lors qu’une prise de conscience est provoquée. Par la mise en place de campagnes de communication, d’événements, de rencontres, nous tendons à faire connaître nos actions, échanger avec les utilisateurs et utilisatrices faisant face à des problèmes quotidiens, mais aussi leurs détracteurs et responsables de ces comportements.

M, comme magique(ou manifester)
Loin d’être la fée Clochette, nous mettons néanmoins tout en oeuvre pour vous proposer une application mobile et des activités empreintes d’une touche de gaieté et d’optimisme. Finie la prévention moralisatrice, la sensibilisation pessimiste et les campagnes chocs ! Celles-ci ont démontré l’augmentation des donations et le développement d’une notoriété certaine auprès des institutions organisatrices, sans pour autant apporter un réel changement dans nos vies. Nous proposons ainsi une autre approche, plus positive, propice aux réflexions et aux échanges, afin d’impliquer chaque acteur de notre société à travers une contribution collective.

A, comme aider
Tout
</Text>
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        bigblue: {
          top: 20,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
        },
        text: {
          top: 40,
          fontSize: 15
        },
        text2: {
          top: 120,
        }
      });
