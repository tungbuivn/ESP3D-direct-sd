/*
  ESP3D

  Copyright (c) 2014 Luc Lebosse. All rights reserved.

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
// library include
#include <Wire.h>
#include <Adafruit_NeoPixel.h>
#include <Arduino.h>
#include "esp3d.h"

#include "direct_sd.h"


#define NEOPIXEL_PIN D1

// global variable
Esp3D myesp3d;
Adafruit_NeoPixel *strip;

// Setup
void setup()
{
  pinMode(NEOPIXEL_PIN,OUTPUT);
  // digitalWrite(NEOPIXEL_PIN,200);
 strip=new Adafruit_NeoPixel(60, NEOPIXEL_PIN, NEO_GRB+NEO_KHZ800 );
  
  strip->begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
  strip->show();            // Turn OFF all pixels ASAP
  strip->setBrightness(255);
  strip->fill(strip->Color(255, 255, 255, strip->gamma8(255)));
  strip->show();

  initDirectSD();
// digitalWrite(A0,0);
// delay(500);
  // analogWrite(A0,250);
// delay(500);
  myesp3d.begin();
  // pinMode(LED_BUILTIN,OUTPUT);
}

// main loop
void loop()
{
// digitalWrite(LED_BUILTIN,HIGH);
// delay(500);
// digitalWrite(LED_BUILTIN,LOW);
// delay(500);
  myesp3d.process();
  
}
