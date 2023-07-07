#include "SD.h"
#include "direct_sd.h"
static bool started = false;
void initDirectSD()
{
    pinMode(SwitchMasterPin, OUTPUT);
    // reset sdcard state for marlin boot
    digitalWrite(SwitchMasterPin, LOW);
    delayMicroseconds(10);
    digitalWrite(SwitchMasterPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(SwitchMasterPin, LOW);
    delayMicroseconds(10);
    pinMode(SD_CS_PIN, OUTPUT);
    SPI.pins(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);
}
void endSDOperation()
{
    digitalWrite(SwitchMasterPin, LOW);
    if (started)
    {
        SD.end();
        started = false;
    }
}

bool beginSDOperation()
{
    pinMode(SwitchMasterPin, OUTPUT);
    digitalWrite(SwitchMasterPin, HIGH);
    delayMicroseconds(10);
    started = SD.begin(SD_CS_PIN, SPI_FULL_SPEED);
    return started;
}
