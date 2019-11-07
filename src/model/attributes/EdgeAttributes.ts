import { edgeAttributesSet } from '../values/util/attributesSets';
import { ArrowheadLike, ColorLike, LabelLike } from '../values/util/likeTypes';
import { Attributes } from './Attributes';

/**
 * @category Attributes
 */
export class EdgeAttributes extends Attributes {
  public set(key: 'label', value: LabelLike): void;
  public set(key: 'color', value: ColorLike): void;
  public set(key: 'arrowhead', value: ArrowheadLike): void;
  // public set(key: string, value: any): void;
  public set(key: string, value: any): void {
    if (edgeAttributesSet.has(key)) {
      super.set(key, value);
    } else {
      throw new Error('Not implemented.');
    }
  }

  public toDot(): string {
    if (this.size === 0) {
      return '';
    }
    const indent = ' '.repeat(2);
    return [
      '[',
      ...Array.from(this.attrs.entries()).map(([key, value]) => `${indent}${key}=${value.toDot()},`),
      ']',
    ].join('\n');
  }
}
