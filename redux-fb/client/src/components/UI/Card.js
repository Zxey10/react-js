import React from 'react'
import { Card as Cardd } from 'react-bootstrap'

export default function Card() {
  return (
    <Cardd style={{ width: "18rem" }}>
            <Cardd.Body>
              <Cardd.Title>Cardd Title</Cardd.Title>
              <Cardd.Subtitle className="mb-2 text-muted">
                Cardd Subtitle
              </Cardd.Subtitle>
              <Cardd.Text>
                Some quick example text to build on the Cardd title and make up
                the bulk of the Cardd's content.
              </Cardd.Text>
              <Cardd.Link href="#">Cardd Link</Cardd.Link>
              <Cardd.Link href="#">Another Link</Cardd.Link>
            </Cardd.Body>
          </Cardd>
  )
}
