import {IProjectCard} from '../IProjectCard';
import {Tags} from '../../common/cards/Tags';
import {Card} from '../Card';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {CardName} from '../../CardName';
import {CardRenderer} from '../render/CardRenderer';
import {AltSecondaryTag} from '../render/CardRenderItem';

export class CuttingEdgeTechnology extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.ACTIVE,
      name: CardName.CUTTING_EDGE_TECHNOLOGY,
      tags: [Tags.SCIENCE],
      cost: 12,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'X18',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a card with a requirement, you pay 2 M€ less for it.', (eb) => {
            eb.cards(1, {secondaryTag: AltSecondaryTag.REQ}).startEffect.megacredits(-2);
          });
        }),
      },
    });
  }

  public play() {
    return undefined;
  }

  public getCardDiscount(_player: Player, card: IProjectCard) {
    if (card.requirements !== undefined) return 2;
    return 0;
  }
}
