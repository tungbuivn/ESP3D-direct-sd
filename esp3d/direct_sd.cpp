#include <SD.h>
#include "direct_sd.h"
#include "espcom.h"
static volatile bool started = false;
// SdFat SD;
void initDirectSD()
{
    pinMode(SwitchMasterPin, OUTPUT);
    digitalWrite(SwitchMasterPin, LOW);
  SPI.pins(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);
//   SPISettings(SPI_FULL_SPEED);
    // pinMode(SwitchMasterPin, OUTPUT);
    // reset sdcard state for marlin boot
    // digitalWrite(SwitchMasterPin, LOW);
    // delayMicroseconds(10);
    // digitalWrite(SwitchMasterPin, HIGH);
    // delayMicroseconds(10);
    // digitalWrite(SwitchMasterPin, LOW);
    // delayMicroseconds(10);
    // pinMode(SD_CS_PIN, OUTPUT);
    // SPI.pins(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);
    // started = SD.begin(SD_CS_PIN, SPI_FULL_SPEED);
    // while (!started)
    // {
    //     LOG(F("\nInit sd failure"));

    //     delay(500);
    //     started = SD.begin(SD_CS_PIN, SPI_FULL_SPEED);
    // }
    // SPI.end();
    // pinMode(SD_CS_PIN, INPUT);
    // pinMode(SD_MOSI_PIN, INPUT);
    // pinMode(SD_SCK_PIN, INPUT);
    // pinMode(SD_MISO_PIN, INPUT);

    // digitalWrite(SD_CS_PIN, LOW);
    // digitalWrite(SD_MOSI_PIN, LOW);
    // digitalWrite(SD_SCK_PIN, LOW);
}
void switchRelay(uint8_t state)
{
    digitalWrite(SwitchMasterPin, state);
    // time minimum need to relay change switch
    delay(10);
    // delay abit more
    delay(200);
}
void endSDOperation()
{

    if (started)
    {
        SD.end();
        started = false;
    }
    // SPI.end();
    // pinMode(SD_CS_PIN, INPUT);
    // pinMode(SD_MOSI_PIN, INPUT);
    // pinMode(SD_SCK_PIN, INPUT);
    // pinMode(SD_MISO_PIN, INPUT);
    switchRelay(LOW);

    // pinMode(SD_CS_PIN, OUTPUT);
    // pinMode(SD_MOSI_PIN, OUTPUT);
    // pinMode(SD_SCK_PIN, OUTPUT);
    // digitalWrite(SD_CS_PIN, LOW);
    // digitalWrite(SD_MOSI_PIN, LOW);
    // digitalWrite(SD_SCK_PIN, LOW);

    // pinMode(SD_SCK_PIN, INPUT);
    // pinMode(SD_MISO_PIN, INPUT);
    // pinMode(SD_MOSI_PIN, INPUT);
    // pinMode(SD_CS_PIN, INPUT);
    // digitalWrite(SD_CS_PIN, LOW);
}

bool beginSDOperation()
{
    switchRelay(HIGH);
    // pinMode(SwitchMasterPin, OUTPUT);
    // digitalWrite(SwitchMasterPin, HIGH);
    // delayMicroseconds(10);

    // pinMode(SD_SCK_PIN, INPUT);
    // pinMode(SD_MISO_PIN, INPUT);
    // pinMode(SD_MOSI_PIN, INPUT);
    // pinMode(SD_CS_PIN, INPUT);

    started = SD.begin(SD_CS_PIN, SPI_FULL_SPEED);
    return started;
}
