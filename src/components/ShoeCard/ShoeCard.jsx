import Link from "next/link";
import styles from "./ShoeCard.module.css";
import Image from "next/image";
import { formatPrice, isNewShoe, pluralize } from "../../utils";

export default function ShoeCard({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) {
  // Hay 3 variantes posibles, basadas en las props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Cualquier zapato lanzado en el último mes será considerado
  // `nuevo-lanzamiento`. Cualquier zapato con un `salePrice` será
  // en-oferta. En teoría, es posible que un zapato sea
  // tanto en-oferta como nuevo-lanzamiento, pero en este caso, `en-oferta`
  // prevalecerá y será la variante utilizada.
  // prettier-ignorar
  const variant =
    typeof salePrice === "number"
      ? "on-sale"
      : isNewShoe(releaseDate)
      ? "new-release"
      : "default";

  return (
    <Link
      className={styles.enlace}
      href={`/shoe/${slug}`}
    >
      <article className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.img}
            src={imageSrc}
            alt={name}
            width={200}
            height={200}
            priority
          />
          {variant === "on-sale" && (
            <span className={styles.saleFlag}>Sale</span>
          )}
          {variant === "new-release" && (
            <span className={styles.newFlag}>Just released!</span>
          )}
        </div>
        <div className={styles.row}>
          <div className={styles.contenido}>
            <h3 className={styles.name}>{name}</h3>
            <span className={salePrice ? styles.salePrice : styles.price}>
              {formatPrice(salePrice || price)}
            </span>
          </div>
          <div className={styles.colorInfo}>
            <p>{pluralize("Color", numOfColors)}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
