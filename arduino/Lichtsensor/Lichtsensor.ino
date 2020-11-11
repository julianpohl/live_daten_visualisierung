#define sensorPin A0
int sensorWert;

void setup() {
  pinMode(sensorPin, INPUT);
  Serial.begin(9600);
}


void loop() {
  sensorWert = analogRead(sensorPin);
  Serial.println(sensorWert);
}
