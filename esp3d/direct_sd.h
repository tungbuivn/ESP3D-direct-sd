#ifndef DIRECTSD_H
#define DIRECTSD_H
#include <SdFat.h>
// class DirectSD
// {
// private:
//     /* data */
// public:
//     DirectSD(/* args */);
//     ~DirectSD();
// };

#define SD_MOSI_PIN D7
#define SD_MISO_PIN D6
#define SD_SCK_PIN D5
#define SD_CS_PIN D8
#define SwitchMasterPin D2
void initDirectSD();
bool beginSDOperation();
void endSDOperation();
// // void SPIShareSdCardUpload();
// // void handleSDFileList();
extern SdFat SD;
#endif
