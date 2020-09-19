# A drónokkal történő csomagszállítás adatkezelési problémáinak vizsgálata

*BSc szakdolgozat*

## Feladatkiírás

A robotika fejlődésének és az online vásárlás egyre népszerűbbé válásának köszönhetően már kísérleti stádiumban vannak az olyan rendszerek, amelyek drónok segítségével oldják meg a csomagok kiszállítását. A dolgozat ezen problémakört vizsgálja az adatok továbbítása, kezelése és tárolása szempontjából.

Mivel ezen rendszerek még kialakulóban vannak, ezért a dolgozat szimulációk segítségével mutatja be, hogy az ilyen típusú logisztikai rendszerben hol keletkeznek adatok, azok milyen csatornákon kerülnek továbbításra és milyen mögöttes adatmodelleket lehet ezek perzisztens tárolásához használni. Elemzésre kerül a hibamentes és a sorrendhelyes adatátvitel kérdésköre, illetve a dolgozat összehasonlítja az elterjedt adatátviteli formátumokat.

A szimulációk Go programozási nyelven készülnek. Az adatmodellek vizsgálata esetében egyaránt bemutatásra kerülnek a relációs és a NoSQL adatmodellek és adatbáziskezelő rendszer implementációik.

## Ötletek

* Hasonló szolgáltatások, infrastruktúra
* Drón típusok (pl.: Amazon esetében)
* Szimulációk, szállításhoz kapcsolódó adatok kezelése
* Különböző szintű adatkezelő csomópontok
* Valós idejű feldolgozás, terheléselosztás
* Lost update probléma
* Apache Kafka
* 3G, 4G hálózat
* Reaktív ütemezési problémák
* Alapvetően nagy mennyiségű adat biztos, hibamentes, hatékony kezeléséről lenne szó.
* Go platform áttekintése, előnyök/hátrányok

