enum Cursor {
  Default = 'default',
  Pointer = 'pointer',
  Grab = 'grab',
  Grabbing = 'grabbing',
  ResizeEdge = 'resize-edge',
  ResizeCorner = 'resize-corner',
  Text = 'text',
  Draw = 'draw',
  Square = 'square',
  Arrow = 'arrow',
  Eraser = 'eraser'
}

export class CursorManager{ 
  private current?: Cursor
  private stack: Cursor[] = []
  public rContainer?: React.RefObject<HTMLDivElement>

  showPointer() {
    this.push(Cursor.Pointer)
  }

  showGrab() {
    this.push(Cursor.Grab)
  }

  showGrabbing() {
    this.push(Cursor.Grabbing)
  }

  showText() {
    this.push(Cursor.Text)
  }

  showResizeEdge(rotation = 0) {
    this.push(Cursor.ResizeEdge)
  }

  showResizeCorner(rotation = 0) {
    this.push(Cursor.ResizeCorner)
  }

  showDraw() {
    this.push(Cursor.Draw)
  }

<<<<<<< HEAD
  showSquare() {
    this.push(Cursor.Square)
=======
<<<<<<< HEAD
  showArrow() {
    this.push(Cursor.Arrow)
=======
  showEraser() {
    this.push(Cursor.Eraser)
>>>>>>> d97e0a79102847c36bee760599812326568ca823
>>>>>>> 967b4b733eba9b01364bc9f67df3476cd0d01f6c
  }

  showPrevious() {
    this.pop()
  }

  reset() {
    this.current = undefined
    this.stack = []
    this.updateElementCursor()
  }

  push(cursor: Cursor) {
    if (this.current) {
      this.stack.push(this.current)
    }
    this.current = cursor
    this.updateElementCursor()
  }

  pop() {
    this.current = this.stack.pop()
    this.updateElementCursor()
  }

  updateElementCursor() {
    const elm = this.rContainer?.current

    if (!elm) return

    const cursor = this.current
      ? `url("${CursorManager.cursorDataUris[this.current]}") 17.5 17.5, auto`
      : `auto`

    elm.style.setProperty('cursor', cursor)
  }

  static cursorDataUris: Record<Cursor, string> = {
    [Cursor.Default]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35' fill='none' fill-rule='evenodd'><path d='m12 24.4219v-16.015l11.591 11.619h-6.781l-.411.124z' fill='%23fff'/><path d='m21.0845 25.0962-3.605 1.535-4.682-11.089 3.686-1.553z' fill='%23fff'/><g fill='%23000'><path d='m19.751 24.4155-1.844.774-3.1-7.374 1.841-.775z'/><path d='m13 10.814v11.188l2.969-2.866.428-.139h4.768z'/></g></svg>",
    [Cursor.Pointer]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35'><g fill='none' fill-rule='evenodd'><path d='m13.3315 21.3799c-.284-.359-.629-1.093-1.243-1.984-.348-.504-1.211-1.453-1.468-1.935-.223-.426-.199-.617-.146-.97.094-.628.738-1.117 1.425-1.051.519.049.959.392 1.355.716.239.195.533.574.71.788.163.196.203.277.377.509.23.307.302.459.214.121-.071-.496-.187-1.343-.355-2.092-.128-.568-.159-.657-.281-1.093-.129-.464-.195-.789-.316-1.281-.084-.348-.235-1.059-.276-1.459-.057-.547-.087-1.439.264-1.849.275-.321.906-.418 1.297-.22.512.259.803 1.003.936 1.3.239.534.387 1.151.516 1.961.164 1.031.466 2.462.476 2.763.024-.369-.068-1.146-.004-1.5.058-.321.328-.694.666-.795.286-.085.621-.116.916-.055.313.064.643.288.766.499.362.624.369 1.899.384 1.831.086-.376.071-1.229.284-1.584.14-.234.497-.445.687-.479.294-.052.655-.068.964-.008.249.049.586.345.677.487.218.344.342 1.317.379 1.658.015.141.074-.392.293-.736.406-.639 1.843-.763 1.898.639.025.654.02.624.02 1.064 0 .517-.012.828-.04 1.202-.031.4-.117 1.304-.242 1.742-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.191 1.813-.118.562-.079.566-.102.965-.023.398.121.922.121.922s-.802.104-1.234.035c-.391-.063-.875-.841-1-1.079-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.031-3.139.02 0 0 .185-1.011-.227-1.358-.305-.259-.83-.784-1.144-1.06z' fill='%23fff'/><g stroke='%23000' stroke-linecap='round' stroke-width='.75'><path d='m13.3315 21.3799c-.284-.359-.629-1.093-1.243-1.984-.348-.504-1.211-1.453-1.468-1.935-.223-.426-.199-.617-.146-.97.094-.628.738-1.117 1.425-1.051.519.049.959.392 1.355.716.239.195.533.574.71.788.163.196.203.277.377.509.23.307.302.459.214.121-.071-.496-.187-1.343-.355-2.092-.128-.568-.159-.657-.281-1.093-.129-.464-.195-.789-.316-1.281-.084-.348-.235-1.059-.276-1.459-.057-.547-.087-1.439.264-1.849.275-.321.906-.418 1.297-.22.512.259.803 1.003.936 1.3.239.534.387 1.151.516 1.961.164 1.031.466 2.462.476 2.763.024-.369-.068-1.146-.004-1.5.058-.321.328-.694.666-.795.286-.085.621-.116.916-.055.313.064.643.288.766.499.362.624.369 1.899.384 1.831.086-.376.071-1.229.284-1.584.14-.234.497-.445.687-.479.294-.052.655-.068.964-.008.249.049.586.345.677.487.218.344.342 1.317.379 1.658.015.141.074-.392.293-.736.406-.639 1.843-.763 1.898.639.025.654.02.624.02 1.064 0 .517-.012.828-.04 1.202-.031.4-.117 1.304-.242 1.742-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.191 1.813-.118.562-.079.566-.102.965-.023.398.121.922.121.922s-.802.104-1.234.035c-.391-.063-.875-.841-1-1.079-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.031-3.139.02 0 0 .185-1.011-.227-1.358-.305-.259-.83-.784-1.144-1.06z' stroke-linejoin='round'/><path d='m21.5664 21.7344v-3.459'/><path d='m19.5508 21.7461-.016-3.473'/><path d='m17.5547 18.3047.021 3.426'/></g></g></svg>",
    [Cursor.Grab]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35'><g fill='none' fill-rule='evenodd'><path d='m13.5557 17.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121' fill='%23fff'/><g stroke='%23000' stroke-linecap='round' stroke-width='.75'><path d='m13.5557 17.5742c-.098-.375-.196-.847-.406-1.552-.167-.557-.342-.859-.47-1.233-.155-.455-.303-.721-.496-1.181-.139-.329-.364-1.048-.457-1.44-.119-.509.033-.924.244-1.206.253-.339.962-.49 1.357-.351.371.13.744.512.916.788.288.46.357.632.717 1.542.393.992.564 1.918.611 2.231l.085.452c-.001-.04-.043-1.122-.044-1.162-.035-1.029-.06-1.823-.038-2.939.002-.126.064-.587.084-.715.078-.5.305-.8.673-.979.412-.201.926-.215 1.401-.017.423.173.626.55.687 1.022.014.109.094.987.093 1.107-.013 1.025.006 1.641.015 2.174.004.231.003 1.625.017 1.469.061-.656.094-3.189.344-3.942.144-.433.405-.746.794-.929.431-.203 1.113-.07 1.404.243.285.305.446.692.482 1.153.032.405-.019.897-.02 1.245 0 .867-.021 1.324-.037 2.121-.001.038-.015.298.023.182.094-.28.188-.542.266-.745.049-.125.241-.614.359-.859.114-.234.211-.369.415-.688.2-.313.415-.448.668-.561.54-.235 1.109.112 1.301.591.086.215.009.713-.028 1.105-.061.647-.254 1.306-.352 1.648-.128.447-.274 1.235-.34 1.601-.072.394-.234 1.382-.359 1.82-.086.301-.371.978-.652 1.384 0 0-1.074 1.25-1.192 1.812-.117.563-.078.567-.101.965-.024.399.121.923.121.923s-.802.104-1.234.034c-.391-.062-.875-.841-1-1.078-.172-.328-.539-.265-.682-.023-.225.383-.709 1.07-1.051 1.113-.668.084-2.054.03-3.139.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.284-.36-.629-1.093-1.243-1.985-.348-.504-1.027-1.085-1.284-1.579-.223-.425-.331-.954-.19-1.325.225-.594.675-.897 1.362-.832.519.05.848.206 1.238.537.225.19.573.534.75.748.163.195.203.276.377.509.23.307.302.459.214.121' stroke-linejoin='round'/><path d='m20.5664 21.7344v-3.459'/><path d='m18.5508 21.7461-.016-3.473'/><path d='m16.5547 18.3047.021 3.426'/></g></g></svg>",
    [Cursor.Grabbing]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35'><g fill='none' fill-rule='evenodd'><path d='m13.5732 12.0361c.48-.178 1.427-.069 1.677.473.213.462.396 1.241.406 1.075.024-.369-.024-1.167.137-1.584.117-.304.347-.59.686-.691.285-.086.62-.116.916-.055.313.064.642.287.765.499.362.623.368 1.899.385 1.831.064-.272.07-1.229.283-1.584.141-.235.497-.445.687-.479.294-.052.656-.068.964-.008.249.049.586.344.677.487.219.344.342 1.316.379 1.658.016.141.074-.393.293-.736.406-.639 1.844-.763 1.898.639.026.654.02.624.02 1.064 0 .516-.012.828-.04 1.202-.03.399-.116 1.304-.241 1.742-.086.301-.371.978-.653 1.384 0 0-1.074 1.25-1.191 1.812-.117.563-.078.567-.102.965-.023.399.121.923.121.923s-.801.104-1.234.034c-.391-.062-.875-.84-1-1.078-.172-.328-.539-.265-.682-.023-.224.383-.709 1.07-1.05 1.113-.669.084-2.055.03-3.14.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.283-.36-1.002-.929-1.243-1.985-.213-.936-.192-1.395.037-1.77.232-.381.67-.589.854-.625.208-.042.692-.039.875.062.223.123.313.159.488.391.23.307.312.456.213.121-.076-.262-.322-.595-.434-.97-.109-.361-.401-.943-.38-1.526.008-.221.103-.771.832-1.042' fill='%23fff'/><g stroke='%23000' stroke-width='.75'><path d='m13.5732 12.0361c.48-.178 1.427-.069 1.677.473.213.462.396 1.241.406 1.075.024-.369-.024-1.167.137-1.584.117-.304.347-.59.686-.691.285-.086.62-.116.916-.055.313.064.642.287.765.499.362.623.368 1.899.385 1.831.064-.272.07-1.229.283-1.584.141-.235.497-.445.687-.479.294-.052.656-.068.964-.008.249.049.586.344.677.487.219.344.342 1.316.379 1.658.016.141.074-.393.293-.736.406-.639 1.844-.763 1.898.639.026.654.02.624.02 1.064 0 .516-.012.828-.04 1.202-.03.399-.116 1.304-.241 1.742-.086.301-.371.978-.653 1.384 0 0-1.074 1.25-1.191 1.812-.117.563-.078.567-.102.965-.023.399.121.923.121.923s-.801.104-1.234.034c-.391-.062-.875-.84-1-1.078-.172-.328-.539-.265-.682-.023-.224.383-.709 1.07-1.05 1.113-.669.084-2.055.03-3.14.02 0 0 .185-1.011-.227-1.358-.305-.26-.83-.784-1.144-1.06l-.832-.921c-.283-.36-1.002-.929-1.243-1.985-.213-.936-.192-1.395.037-1.77.232-.381.67-.589.854-.625.208-.042.692-.039.875.062.223.123.313.159.488.391.23.307.312.456.213.121-.076-.262-.322-.595-.434-.97-.109-.361-.401-.943-.38-1.526.008-.221.103-.771.832-1.042z' stroke-linejoin='round'/><path d='m20.5664 19.7344v-3.459' stroke-linecap='round'/><path d='m18.5508 19.7461-.016-3.473' stroke-linecap='round'/><path d='m16.5547 16.3047.021 3.426' stroke-linecap='round'/></g></g></svg>",
    [Cursor.ResizeEdge]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35'><g fill='none' fill-rule='evenodd'><path d='m9 17.9907v.005l5.997 5.996.001-3.999h1.999 2.02v4l5.98-6.001-5.98-5.999.001 4.019-2.021.002h-2l.001-4.022zm1.411.003 3.587-3.588-.001 2.587h3.5 2.521v-2.585l3.565 3.586-3.564 3.585-.001-2.585h-2.521l-3.499-.001-.001 2.586z' fill='%23fff'/><path d='m17.4971 18.9932h2.521v2.586l3.565-3.586-3.565-3.585v2.605h-2.521-3.5v-2.607l-3.586 3.587 3.586 3.586v-2.587z' fill='%23000'/></g></svg>",
    [Cursor.ResizeCorner]:
      "data:image/svg+xml;utf8,<svg height='35' viewBox='0 0 35 35' width='35' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><path d='m19.7432 17.0869-4.072 4.068 2.829 2.828-8.473-.013-.013-8.47 2.841 2.842 4.075-4.068 1.414-1.415-2.844-2.842h8.486v8.484l-2.83-2.827z' fill='#fff'/><path d='m18.6826 16.7334-4.427 4.424 1.828 1.828-5.056-.016-.014-5.054 1.842 1.841 4.428-4.422 2.474-2.475-1.844-1.843h5.073v5.071l-1.83-1.828z' fill='#000'/></g></svg>",
    [Cursor.Text]:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' width='35' height='35'><path d='m6.94 2v-1c-1.35866267-.08246172-2.66601117.53165299-3.47 1.63-.80398883-1.09834701-2.11133733-1.71246172-3.47-1.63v1c1.30781678-.16635468 2.55544738.59885876 3 1.84v5.1h-1v1h1v4.16c-.4476345 1.2386337-1.69302129 2.002471-3 1.84v1c1.35687108.0731933 2.6600216-.5389494 3.47-1.63.8099784 1.0910506 2.11312892 1.7031933 3.47 1.63v-1c-1.28590589.133063-2.49760499-.6252793-2.94-1.84v-4.18h1v-1h-1v-5.08c.43943906-1.21710975 1.65323743-1.97676587 2.94-1.84z' transform='translate(14 9)'/></svg>",
    [Cursor.Draw]:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='35' height='35' viewBox='0 0 35 35' version='1.1'%3E%3Cg id='surface1'%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(0%25,0%25,0%25);fill-opacity:1;' d='M 31.109375 9.425781 L 28.894531 11.640625 L 23.359375 6.097656 L 25.574219 3.882812 C 26.023438 3.433594 26.8125 3.433594 27.261719 3.882812 L 31.109375 7.738281 C 31.574219 8.203125 31.574219 8.960938 31.109375 9.425781 Z M 12.605469 27.953125 L 7.070312 22.40625 L 21.382812 8.074219 L 26.921875 13.617188 Z M 5.789062 25.082031 L 9.933594 29.230469 L 4.164062 30.859375 Z M 33.085938 5.761719 L 29.238281 1.90625 C 28.484375 1.15625 25.773438 -0.265625 23.605469 1.90625 L 4.101562 21.421875 C 3.929688 21.59375 3.808594 21.800781 3.746094 22.03125 L 0.808594 32.5 C 0.671875 32.984375 0.8125 33.503906 1.164062 33.867188 C 1.519531 34.226562 2.230469 34.289062 2.53125 34.21875 L 12.988281 31.273438 C 13.222656 31.210938 13.425781 31.089844 13.597656 30.917969 L 33.085938 11.402344 C 34.636719 9.851562 34.636719 7.320312 33.085938 5.761719 Z M 33.085938 5.761719 '/%3E%3C/g%3E%3C/svg%3E%0A",
    [Cursor.Square]:
      "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' stroke=%7Bstroke%7D strokeWidth=%7BstrokeWidth%7D fill=%7Bfill%7D xmlns='http://www.w3.org/2000/svg' %3E%3Crect x='4' y='4' width='16' height='16' rx='2' /%3E%3C/svg%3E",
    [Cursor.Arrow]:
      "data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z'/%3E%3C/svg%3E",     
    [Cursor.Eraser]:
      "data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z' stroke='currentColor' /%3E%3Cline x1='6.01807' y1='12.5' x2='10.7959' y2='12.5' stroke='currentColor' strokeLinecap='round' /%3E%3Cline x1='5.50834' y1='5.74606' x2='10.1984' y2='10.4361' stroke='currentColor' /%3E%3C/svg%3E",
  }
}
