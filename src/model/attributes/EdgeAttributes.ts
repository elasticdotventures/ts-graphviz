import { edgeAttributesSet } from '../values/util/attributesSets';
import { ColorValue, LblStringValue } from '../values/valueType';
import { Attributes } from './Attributes';
/**
 * @category Attributes
 */
export class EdgeAttributes extends Attributes {
  public set(key: 'label', value: string | LblStringValue): void;
  public set(key: 'color', value: string | ColorValue): void;
  public set(key: string, value: any): void;
  public set(key: string, value: any): void {
    if (edgeAttributesSet.has(key)) {
      super.set(key, value);
    } else {
      throw new Error('Not implemented.');
    }
  }
}